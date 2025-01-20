import { DarkModeProvider } from "./Context/DarkModeContext.tsx";
import { UserProvider } from "./Context/UserContext.tsx";
import { Router } from "./Routing/Router.tsx";

function App() {
  return (
    <DarkModeProvider>
      <UserProvider>
        <Router />
      </UserProvider>
    </DarkModeProvider>
  );
}

export default App;
