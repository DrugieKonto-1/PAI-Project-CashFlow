import { FetchFile } from "./FetchFile"
import { StartPage } from "./StartPage"

export const GetStarted = () => {
  return(<>
  <StartPage />
  <FetchFile />
  <footer className="App-footer">
        <p>&copy; 2025 Cash Flow. Redefining Banking Experiences.</p>
  </footer>
  </>)
}