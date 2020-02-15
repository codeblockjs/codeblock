import React from 'react';

import './StoryWrapper.css';

export function StoryWrapper(props: React.PropsWithChildren<any>): JSX.Element {
  return (
    <React.Suspense fallback={''}>
      <div>{props.children}</div>
    </React.Suspense>
  );
}
