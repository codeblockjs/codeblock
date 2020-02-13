import raw from 'raw.macro';
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { CodeblockStoryExample } from './storybook-helpers';

export default { title: 'Codeblock.react', decorators: [withKnobs] };

const CodeblockCDN = React.lazy(() => import('../src/Codeblock.cdn'));

export const With_CDN_Provider = () => {
  return (
    <div>
      <h3>HTTP - CDN</h3>
      <p>Same as the HTTP example, but resources are loaded from a CDN.</p>
      <CodeblockStoryExample
        codeblockRenderer={CodeblockCDN}
        children={raw('../src/Codeblock.http.tsx')}
      />
    </div>
  );
};
