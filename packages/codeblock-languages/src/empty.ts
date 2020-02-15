import { PrismLanguageProvider } from '@codeblock/core/types';
import { availableLanguages } from '@codeblock/core';

const noop = () => null;

export default availableLanguages.reduce(
  (result, language) => Object.assign(result, { [language]: noop }),
  {} as PrismLanguageProvider
);
