import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { LandingPage } from './pages/LandingPage';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Share } from './pages/Share';
import { SendMessage } from './components/messaging/SendMessage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Routes>
          {/* Landing page - sans Header/Footer */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Home page - sans Header/Footer */}
          <Route path="/home" element={<Home />} />
          
          {/* Autres routes - avec Header/Footer */}
          <Route 
            path="/dashboard" 
            element={
              <>
                <Header />
                <main className="flex-1">
                  <Dashboard />
                </main>
                <Footer />
              </>
            } 
          />
          <Route 
            path="/share" 
            element={
              <>
                <Header />
                <main className="flex-1">
                  <Share />
                </main>
                <Footer />
              </>
            } 
          />
          <Route 
            path="/u/:code" 
            element={
              <>
                <Header />
                <main className="flex-1">
                  <SendMessage />
                </main>
                <Footer />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;