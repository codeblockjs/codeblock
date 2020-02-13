import React from 'react';
import raw from 'raw.macro';

import { withKnobs } from '@storybook/addon-knobs';

export default { title: 'Codeblock.core', decorators: [withKnobs] };

export const Readme = () => <pre>{raw('../README.md')}</pre>;
