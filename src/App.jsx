import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import GriefCounseling from './components/GriefCounseling';
import KarmaChronicles from './components/KarmaChronicles';
import RecoveryMerch from './components/RecoveryMerch';
import SubmitStory from './components/SubmitStory';
import BuildStory from './components/BuildStory';
import OnlineMedium from './components/OnlineMedium';
import ObituaryTemplates from './components/ObituaryTemplates';
import GriefArticles from './components/GriefArticles';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/grief-counseling" element={<GriefCounseling />} />
          <Route path="/karma-chronicles" element={<KarmaChronicles />} />
          <Route path="/recovery-merch" element={<RecoveryMerch />} />
          <Route path="/submit-story" element={<SubmitStory />} />
          <Route path="/build-story" element={<BuildStory />} />
          <Route path="/online-medium" element={<OnlineMedium />} />
          <Route path="/obituary-templates" element={<ObituaryTemplates />} />
          <Route path="/grief-articles" element={<GriefArticles />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
