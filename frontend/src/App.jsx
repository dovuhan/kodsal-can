import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Exams from './pages/Exams';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sol menü */}
        <Sidebar />
        {/* Ana içerik alanı */}
        <main className="flex-1 bg-gray-100 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/exams" element={<Exams />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
