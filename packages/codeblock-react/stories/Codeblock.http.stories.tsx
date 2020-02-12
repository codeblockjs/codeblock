import raw from 'raw.macro';
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { CodeblockStoryExample } from './index.stories';

export default { title: 'Codeblock.http', decorators: [withKnobs] };

const CodeblockHTTP = React.lazy(() => import('../src/Codeblock.http'));

export const Local = () => {
  return (
    <div>
      <h3>HTTP</h3>
      <p>
        Resources (languages, themes) are hosted on your server and loaded from
        there.
      </p>
      <ul>
        <li>No additional output files are created</li>
        <li>
          When changing language or theme, additional network requests are made
          to load the resources.
        </li>
        <li>Resources are not part of your dependency tree</li>
      </ul>
      <CodeblockStoryExample
        codeblockRenderer={props => (
          /** served via storybook --static-dir */
          <CodeblockHTTP prismPath={'/prismjs/'} {...props} />
        )}
        initialContent={raw('../src/Codeblock.http.tsx')}
      />
    </div>
  );
};
