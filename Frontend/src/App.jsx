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


</CanvasContainer>


}

export default App;

<CanvasContainer> 
           
           <TopSection/>
           <Canvas>
           <Suspense fallback={null}>
              <Earth/>
          </Suspense>
          </Canvas>
         < Hero/>
         
</CanvasContainer>

