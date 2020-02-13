import React from 'react';
import raw from 'raw.macro';

import { button, select } from '@storybook/addon-knobs';

import { availableLanguages, availableThemes } from '@codeblock/core';
import readLocalFiles from '@loopmode/read-local-files';
import { StoryWrapper } from '../../../.storybook/StoryWrapper';
import Markdown from '@loopmode/markdown/http';

export const Readme = () => (
  <StoryWrapper>
    <Markdown prismPath="./prismjs/" prismTheme="okaidia">
      {raw('../README.md')}
    </Markdown>
  </StoryWrapper>
);

export const Changelog = () => (
  <StoryWrapper>
    <Markdown prismPath="./prismjs/" prismTheme="okaidia">
      {raw('../CHANGELOG.md')}
    </Markdown>
  </StoryWrapper>
);

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
