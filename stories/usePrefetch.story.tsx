import { storiesOf } from '@storybook/react';
import React from 'react';
import { usePrefetch } from '../src';
import ShowDocs from './util/ShowDocs';

const importedComponent = () => import('../src/comps/Mock');

const Demo = () => {
  const [isShown, setIsShown] = React.useState(false);
  const Mock = usePrefetch(importedComponent);

  return (
    <div>
      <button onClick={() => setIsShown(true)}>Show</button>
      <React.Suspense fallback={<h1>Waiting for...</h1>}>{isShown && <Mock />}</React.Suspense>
    </div>
  );
};

storiesOf('Lifecycle|usePrefetch', module)
  .add('Docs', () => <ShowDocs md={require('../docs/usePrefetch.md')} />)
  .add('Demo', () => <Demo />);
