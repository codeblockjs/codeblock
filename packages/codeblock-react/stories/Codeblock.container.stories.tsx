import React from 'react';
import raw from 'raw.macro';

import { withKnobs, select } from '@storybook/addon-knobs';

import { availableThemes } from '@codeblock/core';
import Codeblock from '@codeblock/react/static';
export default { title: 'Codeblock.container', decorators: [withKnobs] };

export const multipleChildren = () => (
  <div>
    <h3>Container mode</h3>
    <p>
      Here, a single codeblock is used for multiple elements with individual
      languages. Typical scenario is rendered markdown.
    </p>
    <Codeblock
      isContainer
      theme={select('Theme', ['', ...availableThemes], 'okaidia')}
    >
      <div>
        <div>
          <pre className="language-jsx">{raw('../src/Codeblock.http.tsx')}</pre>
        </div>

        <div>
          <pre className="language-json">{raw('../package.json')}</pre>
        </div>

        <div>
          <pre className="language-json">{raw('../../../package.json')}</pre>
        </div>
      </div>
    </Codeblock>
  </div>
);
