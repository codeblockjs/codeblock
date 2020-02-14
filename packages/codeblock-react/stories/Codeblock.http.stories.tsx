import raw from 'raw.macro';
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { CodeblockStoryExample } from './storybook-helpers';
import { StoryWrapper } from '../../../.storybook/StoryWrapper';
export default { title: 'Codeblock.react', decorators: [withKnobs] };

const CodeblockHTTP = React.lazy(() => import('../src/Codeblock.http'));

export const With_HTTP_Provider = () => {
  return (
    <StoryWrapper>
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
        children={raw('../src/Codeblock.http.tsx')}
      />
    </StoryWrapper>
  );
};
