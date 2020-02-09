export const asyncPrismProvider = () => {
  return import(/* webpackChunkName: 'codeblock/prismjs' */ 'prismjs');
};
