import { storiesOf } from '@storybook/react';
import React from 'react';
import { useEffectMounted } from '../src';
import ShowDocs from './util/ShowDocs';

const Demo = () => {
  const [mounted, setMounted] = React.useState(true);

  const InnerComponent = () => {
    const [id, setId] = React.useState(1);

    const getData = React.useCallback(
      ({ getIsMounted }) => {
        setTimeout(() => {
          if (getIsMounted()) {
            // do something
            setId(id + 1);
            console.log('Mounted');
          } else {
            console.log('Unmounted');
          }
        }, 1000);
      },
      [id]
    );
    useEffectMounted(getData);

    return <p>Current id: {id}</p>;
  };

  return (
    <>
      <p>Open the developer console to see logs</p>
      {mounted && <InnerComponent />}
      <button onClick={setMounted.bind(null, false)}>Unmount</button>
    </>
  );
};

storiesOf('Lifecycle|useEffectMounted', module)
  .add('Docs', () => <ShowDocs md={require('../docs/useEffectMounted.md')} />)
  .add('Demo', () => <Demo />);
