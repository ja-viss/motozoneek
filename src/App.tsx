import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import HomePage from './pages/HomePage.tsx';
import FinancingPage from './pages/FinancingPage.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-moto-orange/20">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <HomePage />
            </main>
          } />
          <Route path="/financiamiento" element={
            <main className="pt-20">
              <FinancingPage />
            </main>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
