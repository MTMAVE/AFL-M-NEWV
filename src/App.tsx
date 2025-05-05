import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ShowcasePage from './pages/Showcase';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="showcase" element={<ShowcasePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;