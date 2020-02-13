import React from 'react';
import raw from 'raw.macro';
import Markdown from '@loopmode/markdown/http';
import { StoryWrapper } from '../../../.storybook/StoryWrapper';

export default { title: 'Codeblock.core' };

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
