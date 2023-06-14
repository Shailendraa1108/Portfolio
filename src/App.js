import logo from './logo.svg';
import './App.css';
import Header, { HeaderPhone } from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);
  return (
    <>

      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Home ratio={ratio} />
      <Work />
      <Timeline />
      <Services />
      <Testimonial name={"Shailendra"}
        feedback={"Your projects are awesome"}
        name1={"Sundar pichai"}
        name2={"Brad Smith. ..."}
        feedback1={"Amazing seems like you should the google CEO"}
        feedback2={"WOW What a portfolio your portfolio is awesome"}

      />
      <Contact />
      <Footer />



    </>
  )
  
}

export default App;
