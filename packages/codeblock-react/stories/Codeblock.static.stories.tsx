import React from 'react';
import raw from 'raw.macro';

import { withKnobs } from '@storybook/addon-knobs';

import { CodeblockStoryExample } from './storybook-helpers';
import { StoryWrapper } from '../../../.storybook/StoryWrapper';
export default { title: 'Codeblock.react', decorators: [withKnobs] };

const CodeblockStatic = React.lazy(() => import('../src/Codeblock.static'));

export const WithStaticProvider = () => (
  <StoryWrapper>
    <h3>static</h3>
    <p>
      Resources (languages, themes) are statically imported at module level.
    </p>
    <ul>
      <li>No additional chunks are created when bundling</li>
      <li>Puts all dependencies into your bundle at once (>300kb)</li>
      <li>No additional network requests are made</li>
      <li>Resources are part of your dependency tree</li>
    </ul>
    <CodeblockStoryExample
      codeblockRenderer={CodeblockStatic}
      children={raw('../src/Codeblock.static.tsx')}
    />
  </StoryWrapper>
);
