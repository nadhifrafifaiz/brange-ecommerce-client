import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseComponent from "./pages/BaseComponents";
import ErrorNotFoundPage from "./pages/error-page/ErrorNotFoundPage";
import LoginPage from "./pages/authentication/LoginPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaseComponent />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorNotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
