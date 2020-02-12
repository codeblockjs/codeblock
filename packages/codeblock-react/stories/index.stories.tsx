import React from 'react';

import { button, select } from '@storybook/addon-knobs';

import { availableLanguages, availableThemes } from '@codeblock/core';
import readLocalFiles from '@loopmode/read-local-files';

async function readLocalFile(): Promise<string> {
  try {
    const fileInputs = await readLocalFiles({ multiple: false });
    return fileInputs[0].result.toString();
  } catch (error) {
    console.warn(error);
    return '';
  }
}

export const CodeblockStoryExample: React.FC<{
  codeblockRenderer: React.FC<any>;
  isContainer?: boolean;
}> = ({ codeblockRenderer: CodeblockRenderer, isContainer, children }) => {
  const [content, setContent] = React.useState<any>(children);

  button('Load content file', async () =>
    setContent((await readLocalFile()) || content)
  );

  return (
    <React.Suspense fallback={''}>
      <CodeblockRenderer
        isContainer={isContainer}
        language={select('Language', ['', ...availableLanguages], 'jsx')}
        theme={select('Theme', ['', ...availableThemes], 'okaidia')}
      >
        {content}
      </CodeblockRenderer>
    </React.Suspense>
  );
};
