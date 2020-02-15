import React from 'react';
import raw from 'raw.macro';

import { withKnobs } from '@storybook/addon-knobs';

import { CodeblockStoryExample } from './storybook-helpers';
import { StoryWrapper } from '../../../.storybook/StoryWrapper';
import { Toggle } from './Toggle';
export default { title: 'Codeblock.react', decorators: [withKnobs] };

const Codeblock = React.lazy(() => import('../src/Codeblock.cdn'));

export const WithSrcProp = () => (
  <StoryWrapper>
    <h3>static</h3>
    <p>
      Loads external content via <code>src</code> prop.
    </p>
    <Toggle>
      <Codeblock language="tsx">{raw('./Codeblock.src.stories.tsx')}</Codeblock>
    </Toggle>

    <Codeblock
      theme="prism"
      language="cpp"
      src="https://raw.githubusercontent.com/chromium/chromium/master/chrome/service/service_utility_process_host.cc"
    />
  </StoryWrapper>
);
