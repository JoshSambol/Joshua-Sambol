import { Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { MotionConfig } from 'framer-motion';
import '@mantine/core/styles.css';
import './styles/global.css';
import theme from './theme';

import Layout from './components/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <MantineProvider theme={theme}>
      <MotionConfig reducedMotion="user">
        <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      </MotionConfig>
    </MantineProvider>
  );
}

export default App;
