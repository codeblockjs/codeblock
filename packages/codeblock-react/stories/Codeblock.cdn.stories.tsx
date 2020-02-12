import raw from 'raw.macro';
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { CodeblockStoryExample } from './index.stories';

export default { title: 'Codeblock.http', decorators: [withKnobs] };

const CodeblockCDN = React.lazy(() => import('../src/Codeblock.cdn'));

export const CDN = () => {
  return (
    <div>
      <h3>HTTP - CDN</h3>
      <p>Same as the HTTP example, but resources are loaded from a CDN.</p>
      <CodeblockStoryExample
        codeblockRenderer={CodeblockCDN}
        initialContent={raw('../src/Codeblock.http.tsx')}
      />
    </div>
  );
};