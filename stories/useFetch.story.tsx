import { storiesOf } from '@storybook/react';
import React from 'react';
import { useFetch } from '../src';
import ShowDocs from './util/ShowDocs';

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 3000);
});

const Demo = () => {
  const [result, error, state] = useFetch(promise);

  return (
    <>
      <div>{error && `Error: ${error}`}</div>
      <div>{state === useFetch.stateTypes.PENDING && 'Loading...'}</div>
      <div>{result && <p>{result}</p>}</div>
    </>
  );
};

storiesOf('Lifecycle|useFetch', module)
  .add('Docs', () => <ShowDocs md={require('../docs/useFetch.md')} />)
  .add('Demo', () => <Demo />);
