import raw from 'raw.macro';
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { CodeblockStoryExample } from './storybook-helpers';

const CodeblockAsync = React.lazy(() => import('../src/Codeblock.async'));

export default { title: 'Codeblock.react', decorators: [withKnobs] };
export const With_AsyncProvider = () => (
  <div>
    <h3>async</h3>
    <p>
      Resources (languages, themes) are dynamically imported at module level.
    </p>
    <ul>
      <li>
        Requires a bundler that supports dynamic imports (e.g. webpack, rollup)
      </li>
      <li>A separate chunk is created for each language and theme</li>
      <li>
        Puts all dependencies into your bundle, but spread over many small files
        (>300kb)
      </li>
      <li>
        Additional network requests are made to load resources when needed
      </li>
      <li>Resources are part of your dependency tree</li>
    </ul>
    <CodeblockStoryExample
      codeblockRenderer={CodeblockAsync}
      children={raw('../src/Codeblock.async.tsx')}
    />
  </div>
);
