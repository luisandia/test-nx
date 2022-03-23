// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Courseitem } from '@edr/courseitem';
import { Button as EButton } from '@primer/react';
import { Button, Header ,Autocomplete } from '@myorg/mylib';
import {ThemeProvider} from '@primer/react'

export function App() {
  return (
    <ThemeProvider>
    <Header/>
    <Autocomplete/>
      <Courseitem />
      <EButton variant="danger">Danger</EButton>
      <NxWelcome title="edr-frontend" />
      <div />
    </ThemeProvider>
  );
}

export default App;
