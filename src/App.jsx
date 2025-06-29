import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Header from './sections/Header';
import Footer from './sections/Footer';

import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Working from './sections/Working';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

import Abc from './sections/abc';
import Servicesnext from './sections/Servicesnext';
// import Portfolionext from './sections/Portfolionext';



import Team from './sections/team';
import Gallerypage from './sections/gallerypage';
import Contectpage from './sections/contectpage';
import Suucesfullpage from './sections/suucesfullpage';
import Carearpage from './sections/Carearpage';
import Resources from './sections/Resources';



// Layout component with header and footer
function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home Page */}
          <Route index element={
            <>
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <Working />
              <Testimonials />
              <Contact />
            </>
          } />

          {/* Individual Pages */}
          <Route path="about" element={<Abc />} />
          <Route path="services" element={<Servicesnext />} />
          <Route path="Team-members" element={<Team />} />
          <Route path="gallery" element={<Gallerypage />} />
          <Route path="contact" element={<Contectpage />} />
          <Route path="Carearpage" element={<Carearpage />} />
          <Route path="resources" element={<Resources/>} />

          <Route path="successful-project" element={<Suucesfullpage />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
