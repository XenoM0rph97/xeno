import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Certs } from "./components";

// Checking if the current host contains "pages.dev" (Cloudflare)
const isCloudflare = window.location.hostname.includes('pages.dev');
const routerBasename = isCloudflare ? '/' : '/xeno';

// Main layout block for the single-page portfolio structure
const MainLayout = () => (
  <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Certs />
    <Works />
    <Feedbacks />
    <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter basename={routerBasename}>
      <Routes>
        {/* Renders the portfolio when at the base path determined by the basename */}
        <Route path="/" element={<MainLayout />} />

        {/* 
          Wildcard route: catches any invalid/random subpaths (e.g., /asdf) 
          and safely redirects the user back to the active basename root.
        */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;