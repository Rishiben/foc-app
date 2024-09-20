
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import HomePage from "./pages/homepage"
import MenuPage from './pages/menupage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menupage/:id" element={<MenuPage />} />
      </Routes>
  );
}

export default App;
