import { Route, Routes, useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";
const Dashboard = lazy(() => import("./components/dash"));
const LandingPage = lazy(() => import("./components/landing"));
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ color: "red", backgroundColor: "black" }}>Header</div>
      <button onClick={() => navigate("/dash")}>Dash</button>
      <button onClick={() => navigate("/landing")}>Landing</button>

      <Routes>
        <Route
          path="/dash"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/landing"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LandingPage />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
