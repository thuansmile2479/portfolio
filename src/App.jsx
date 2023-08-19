import React from "react";
import Navbar from "./components/Navbar"; 
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      id="top"
      className="bg-rgb(255,255,255) dark:rgb(255,255,255) transition ease-in-out font-poppins"
    >
      <Navbar /> 
      <LandingPage />
      <AboutPage />
      <Stack />
      <Projects />
      <ContactPage />
      <Footer />
    </div>
  );
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
export const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export default App;

