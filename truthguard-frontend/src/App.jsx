import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import EmailScan from "./pages/EmailScan";
import ImageScan from "./pages/ImageScan";
import UrlScan from "./pages/UrlScan";
import History from "./pages/History";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/email"
          element={<EmailScan />}
        />

        <Route
          path="/image"
          element={<ImageScan />}
        />

        <Route
          path="/url"
          element={<UrlScan />}
        />

        <Route
          path="/history"
          element={<History />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;