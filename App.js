 import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* Add more routes for Chats, Analytics, etc., as needed */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;