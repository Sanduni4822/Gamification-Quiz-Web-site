import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    </Router>
  );
}
