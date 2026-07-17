import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Certs } from "./components";

// Checking if the current host contains "pages.dev" (Cloudflare)
const isCloudflare = window.location.hostname.includes('pages.dev');
const routerBasename = isCloudflare ? '/' : '/xeno';

const App = () => {
  return (
    <BrowserRouter basename={routerBasename}>
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
    </BrowserRouter>
  );
}

export default App;