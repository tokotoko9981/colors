// App.js
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/index";
import QuestionPage from "./pages/question";
import Clear from "./pages/clear";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question/:id" element={<QuestionPage />} />
        <Route path="/clear" element={<Clear />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
