import React from 'react';

import './StoryWrapper.css';

export function StoryWrapper(props: React.PropsWithChildren<any>): JSX.Element {
  return <div>{props.children}</div>;
}
