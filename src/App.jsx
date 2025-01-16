import './App.css';
import CampaignDashboard from './components/CampaignDashboard';
import { ThemeProvider } from './components/ThemeProvider';
import PostCampaignPage from './components/PostCampaignPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
       <Router>
      <Routes>
        <Route path="/" element={<CampaignDashboard />} />
        <Route path="/post-campaign" element={<PostCampaignPage />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;