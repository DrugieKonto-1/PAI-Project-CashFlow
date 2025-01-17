import { Router } from './components/Router';
import { DarkModeProvider } from '../src/Context/DarkModeContext.tsx';

function App() {
  return (
    <DarkModeProvider>
      <Router />
    </DarkModeProvider>
  );
}

export default App;
