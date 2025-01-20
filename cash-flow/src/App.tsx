import { Router } from './Routing/Router.tsx';
import { DarkModeProvider } from '../src/Context/DarkModeContext.tsx';
// Strona wyswietlana
function App() {
  return (
    <DarkModeProvider>
      <Router />
    </DarkModeProvider>
  );
}

export default App;
