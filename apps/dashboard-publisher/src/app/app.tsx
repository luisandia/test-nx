// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Autocomplete, Header, Button } from '@myorg/mylib';
import { ThemeProvider } from '@primer/react';

export function App() {
  return (
    <ThemeProvider>
      <h1>Dashboard Publisher</h1>
      <Header />
      <Button variant="danger" name="PUBLISHER" />
      <Autocomplete />
    </ThemeProvider>
  );
}

export default App;
