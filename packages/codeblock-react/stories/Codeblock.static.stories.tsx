import React from 'react';
import raw from 'raw.macro';

import { withKnobs } from '@storybook/addon-knobs';

import { CodeblockStoryExample } from './index.stories';
export default { title: 'Codeblock.static', decorators: [withKnobs] };

const CodeblockStatic = React.lazy(() => import('../src/Codeblock.static'));

export const Default = () => (
  <div>
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
      initialContent={raw('../src/Codeblock.static.tsx')}
    />
  </div>
);