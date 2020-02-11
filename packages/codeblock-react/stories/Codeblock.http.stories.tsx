import raw from 'raw.macro';
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { CodeblockStoryExample } from './index.stories';
import { useLanguagesPath } from '../src/use-languages-path';
import { cdnLanguagesPath } from '@codeblock/core/lib/utils/autoloader';

export default { title: 'Codeblock.http', decorators: [withKnobs] };

const CodeblockHTTP = React.lazy(() => import('../src/Codeblock.http'));

export const Local = () => {
  useLanguagesPath('./prism/languages/');
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
        codeblockRenderer={CodeblockHTTP}
        initialContent={raw('../src/Codeblock.http.tsx')}
      />
    </div>
  );
};

export const CDN = () => {
  useLanguagesPath(cdnLanguagesPath);

  return (
    <div>
      <h3>HTTP - CDN</h3>
      <p>Same as the HTTP example, but resources are loaded from a CDN.</p>
      <CodeblockStoryExample
        codeblockRenderer={CodeblockHTTP}
        initialContent={raw('../src/Codeblock.http.tsx')}
      />
    </div>
  );
};
