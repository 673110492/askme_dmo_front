import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Share } from './pages/Share';
import { SendMessage } from './components/messaging/SendMessage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/share" element={<Share />} />
            <Route path="/u/:code" element={<SendMessage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;