import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} /> {/* Default (Login) */}
        </Route>
      </Routes>
    </Router>
  );
}
