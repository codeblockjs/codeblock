import React from 'react';
import { setLanguagesPath } from '@codeblock/core/lib/utils/autoloader';

export function useLanguagesPath(url: string) {
  React.useEffect(() => {
    setLanguagesPath(url);
    return () => setLanguagesPath(undefined);
  }, [url]);
}
