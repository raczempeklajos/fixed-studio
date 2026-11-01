
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import ExploreBuildsPage from "./pages/ExploreBuildsPage";
import BikeBuilderPage from "./pages/BikeBuilderPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/explore"
          element={
            <>
              <Navbar />
              <ExploreBuildsPage />
            </>
          }
        />

        <Route
          path="/builder"
          element={
            <>
              <Navbar />
              <BikeBuilderPage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
