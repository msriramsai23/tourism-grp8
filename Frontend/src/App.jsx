import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {Canvas} from '@react-three/fiber';
import { Suspense } from 'react';
import { Earth } from './components/earth';
import {TopSection} from './components/topSection';
import Hero from './components/Hero';
import Navbar1 from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/cardsdisplay';
import Package from './components/Packages';

import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';


const CanvasContainer = styled.div`
  width: 100%;
  height: 90%;
`;

function App() {
  return <CanvasContainer> 
  <Navbar1/>
  <TopSection/>
  <Canvas>
  <Suspense fallback={null}>
     <Earth/>
 </Suspense>
 </Canvas>
< Hero/>


<Package/>
<About/>
<Services/>
<Footer/>
</CanvasContainer>



}

export default App;

