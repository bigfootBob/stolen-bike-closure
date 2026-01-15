import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import GriefCounseling from './components/GriefCounseling';
import KarmaChronicles from './components/KarmaChronicles';
import RecoveryMerch from './components/RecoveryMerch';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/grief-counseling" element={<GriefCounseling />} />
          <Route path="/karma-chronicles" element={<KarmaChronicles />} />
          <Route path="/recovery-merch" element={<RecoveryMerch />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
