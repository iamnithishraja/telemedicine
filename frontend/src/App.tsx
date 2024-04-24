import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  AuthenticateWithRedirectCallback,
  ClerkProvider,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import BoilerplatePage from "./components/PagesBoilerplate/BoilerPlatePage";
import Homepage from "./pages/Homepage";
import { dark } from "@clerk/themes";
import NavBar from "./components/Navbar";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

function App(): JSX.Element {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
      publishableKey={PUBLISHABLE_KEY}
    >
      <BrowserRouter>
        <NavBar />
        <BoilerplatePage>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </BoilerplatePage>
      </BrowserRouter>
    </ClerkProvider>
  );
}

const SsoCallback = () => {
  return <AuthenticateWithRedirectCallback />;
};

export default App;
