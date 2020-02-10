import React from 'react';
import raw from 'raw.macro';

import { withKnobs, button, select } from '@storybook/addon-knobs';

import { Codeblock } from './Codeblock.async';

import readLocalFiles from '@loopmode/read-local-files';
import { availableLanguages, availableThemes } from '@codeblock/core';

export default { title: 'Codeblock', decorators: [withKnobs] };

export const fullyControlled = () => {
  const [content, setContent] = React.useState<string>(
    raw('./index.stories.tsx')
  );

  button('Load file to view', async () =>
    setContent((await readFile()) || content)
  );

  return (
    <Codeblock
      language={select('Language', ['', ...availableLanguages], 'jsx')}
      theme={select('Theme', ['', ...availableThemes], 'okaidia')}
    >
      {content}
    </Codeblock>
  );
};
async function readFile(): Promise<string> {
  try {
    const fileInputs = await readLocalFiles({ multiple: false });
    return fileInputs[0].result.toString();
  } catch (error) {
    console.warn(error);
    return '';
  }
}
