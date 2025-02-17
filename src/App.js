// App.js
import Home from "./app/page";
import QuestionPage from "./app/question/[id]";
import Clear from "./app/clear";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question/:id" element={<QuestionPage />} />
        <Route path="/clear" element={<Clear />} />
      </Routes>
    </Router>
  );
}

export default App;