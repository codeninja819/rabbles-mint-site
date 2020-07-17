import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useWeb3Context } from "./hooks/web3Context";

import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer";
import Minting from "./pages/Miniting";

import "./App.css";
import "./assets/css/mint.css";
import "./assets/assets/win95.css";
import Notification from "./components/Notification";

function App() {
  const { connect, hasCachedProvider } = useWeb3Context();

  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (hasCachedProvider()) {
      // then user DOES have a wallet
      connect().then((msg) => {
        if (msg.type === "error") {
          setNotification(msg);
        }
      });
    } else {
      // then user DOES NOT have a wallet
    }
    // We want to ensure that we are storing the UTM parameters for later, even if the user follows links
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div class="crt">
      <BrowserRouter>
        <TopBar setNotification={setNotification} />
        <Routes>
          <Route
            path="/"
            element={<Minting setNotification={setNotification} />}
          />
        </Routes>
        <Footer />
        <Notification data={notification} />
      </BrowserRouter>
    </div>
  );
}

export default App;
