// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Courseitem } from '@edr/courseitem';
export function App() {
  return (
    <>
      <Courseitem />
      <NxWelcome title="edr-frontend" />
      <div />
    </>
  );
}

export default App;
