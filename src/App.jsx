import React from "react";
import Navbar from "./components/Navbar"; 
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import Stack from "./components/Stack";

function App() {
  return (
    <div
      id="top"
      className="bg-white dark:bg-[#242424] transition ease-in-out font-poppins"
    >
      <Navbar /> 
      <LandingPage />
      <AboutPage />
      <Stack />
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

