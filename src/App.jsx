import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage"; // Import the Login Page component

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} /> {/* Default route (Login) */}
        </Route>
      </Routes>
    </Router>
  );
}
