import React from 'react';
import raw from 'raw.macro';

import { withKnobs, select } from '@storybook/addon-knobs';

import { Codeblock } from './Codeblock.react.static';

export default { title: 'Codeblock', decorators: [withKnobs] };

// const languageOptions = ['', ...supportedLanguages] as PrismLanguage[];

export const ownSource = () => (
  <Codeblock language="jsx">{raw('./index.stories.tsx')}</Codeblock>
);

// export const ownSource = () => (
//   <Codeblock
//     language={select<PrismLanguage>('Language', languageOptions, 'jsx')}
//   >
//     {raw('./Codeblock.stories.tsx')}
//   </Codeblock>
// );

// export const asContainer = () => {
//   return (
//     <Codeblock container as="div">
//       <h1>Container example</h1>
//       <p>
//         This example is completely wrapped in a{' '}
//         <code>{'<Codeblock container as="div">'}</code> and contains several{' '}
//         <code>{'<pre>'}</code> elements with a <code>"language-*"</code> CSS
//         classname. The necessary prism languages are detected and applied, and
//         because this storybook uses lazy mode, the languages are loaded as well.
//         <br />
//         Check out the network panel and reload the page.
//       </p>
//       <h3>javascript</h3>
//       <pre className="language-javascript">
//         <code>{raw('../lib/utils/detectLanguages.js')}</code>
//       </pre>

//       <h3>typescript</h3>
//       <pre className="language-typescript">
//         <code>{raw('./types.d.ts')}</code>
//       </pre>

//       <h3>java</h3>
//       <pre className="language-java">
//         <code>{raw('../example-code/example.java')}</code>
//       </pre>

//       <h3>python</h3>
//       <pre className="language-python">
//         <code>{raw('../example-code/example.py')}</code>
//       </pre>
//     </Codeblock>
//   );
// };
