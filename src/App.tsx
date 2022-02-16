import React from 'react';
import './App.css';
import NavBar from "./components/Nav";
import Hero from "./components/Hero";
import DeepJungle from './components/DeepJungle';
import About from './components/About';
import Artists from './components/Artists';
import JoinClub from './components/JoinClub';
import Festival from './components/Festival';
import Team from './components/Team';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer';
import RoadMap from './components/RoadMap';
function App() {
  return (    
    <>
      <NavBar />
      <Hero />
      <DeepJungle />
      {/* <Intro /> */}
      <About />
      <Artists />
      <JoinClub />
      <RoadMap />
      <Festival />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
