import { storiesOf } from '@storybook/react';
import React from 'react';
import { useEffectAfterMount } from '../src';
import ShowDocs from './util/ShowDocs';

const Demo = () => {
  const [runned, setRunned] = React.useState(false);
  const [change, setChange] = React.useState(false);

  const action = React.useCallback(() => {
    // do something
    console.log(change);
    setRunned(true);
  }, [change]);
  useEffectAfterMount(action);

  return (
    <>
      <div>{runned ? 'Runned' : 'Not Runned on mount'}</div>
      <button onClick={setChange.bind(null, true)}>Run</button>
    </>
  );
};

storiesOf('Lifecycle|useEffectAfterMount', module)
  .add('Docs', () => <ShowDocs md={require('../docs/useEffectAfterMount.md')} />)
  .add('Demo', () => <Demo />);
