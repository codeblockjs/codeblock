import React from 'react';
import raw from 'raw.macro';

import { withKnobs, select } from '@storybook/addon-knobs';

import { availableThemes } from '@codeblock/core';
import { StoryWrapper } from '../../../.storybook/StoryWrapper';

const Codeblock = React.lazy(() => import('../src/Codeblock.cdn'));

export default { title: 'Codeblock.react', decorators: [withKnobs] };

export const AsContainer = () => (
  <StoryWrapper>
    <h2>Container mode</h2>
    <p>
      Here, a single codeblock is used for multiple elements with individual
      languages. Typical scenario is rendered markdown.
    </p>
    <Codeblock
      isContainer
      theme={select('Theme', ['', ...availableThemes], 'okaidia')}
    >
      <div className="grid-2">
        <div>
          <h3>Own source</h3>
          <pre className="language-tsx">
            {raw('./Codeblock._container.stories.tsx')}
          </pre>
        </div>

        <div>
          <h3>Own package.json</h3>
          <pre className="language-json">{raw('../package.json')}</pre>
        </div>

        <div>
          <h3>Own tsconfig.json</h3>
          <div>
            <pre className="language-json">{raw('../tsconfig.json')}</pre>
          </div>
        </div>

        <div>
          <h3>Another codeblock</h3>
          <pre className="language-tsx">
            {raw('../src/Codeblock.static.tsx')}
          </pre>
        </div>
      </div>
    </Codeblock>
  </StoryWrapper>
);
