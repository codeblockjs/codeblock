import React from 'react';
import raw from 'raw.macro';

import { StoryWrapper } from '../../../.storybook/StoryWrapper';
import Markdown from '@loopmode/markdown/http';

export default { title: 'Codeblock.react' };

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
