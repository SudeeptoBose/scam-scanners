import { Canvas } from '@react-three/fiber'
import React from 'react'

const Meme = () => {
  return (
    <Canvas>
      <boxGeometry/>
      <meshBasicMaterial color={'red'}/>
    </Canvas>
  )
}

export default Meme