import { Suspense, useState } from 'react'
import styled from 'styled-components '
import logo from './logo.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Earth from './components/earth'

//ignored for now
const CanvasContainer = styled.div`
width: 100%;
height: 100vh;
`

function App() {
  const [count, setCount] = useState(0)

  return (
   <CanvasContainer>
     <Canvas >
       <Suspense fallback={null}>
          <Earth/>
       </Suspense>
     </Canvas>
    </CanvasContainer>
  )
}

export default App
