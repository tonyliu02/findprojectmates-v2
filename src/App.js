import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/homePage';
import GetStartedPage from './pages/post/getStartedPage';

function App() {
  return (
    <div>
      <Navbar />
      {/* 'exact' keyword needs not be used in Route */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;