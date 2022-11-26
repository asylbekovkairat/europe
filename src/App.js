import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { FactsPage } from './pages/FactsPage/FactsPage';
import { CarsPage } from './pages/CarsPage/CarsPage';
import { IndustryPage } from './pages/IndustryPage/IndustryPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/facts"} element={<FactsPage />} />
        <Route path={"/auto"} element={<CarsPage />} />
        <Route path={"/industry"} element={<IndustryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
