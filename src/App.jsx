import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import GradeSelectionPage from "./pages/GradeSelection/GradeSelectionPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} /> {/* Default (Login) */}
          <Route path="grade-selection" element={<GradeSelectionPage />} /> {/* Grade Selection */}
        </Route>
      </Routes>
    </Router>
  );
}
