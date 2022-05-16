import React, {useRef} from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import EarthClouds from '../../textures/earth_clouds.jpg'
import EarthDayMap from '../../textures/earth_daymap.jpg'
import EarthNightMap from '../../textures/earth_nightmap.jpg'
import EarthNormalMap from '../../textures/earth_normal_map.jpg'
import EarthSpecularMap from '../../textures/earth_specular_map.jpg'
import { TextureLoader } from 'three'

import * as THREE from 'three'

import { OrbitControls, Stars } from '@react-three/drei'
import { PointLight } from 'three'

export default function Earth() {
    const [colorMap, normalMap, specularMap, cloudsMap ] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap,EarthClouds])
let ref = useRef()
let cloudRef = useRef()

useFrame(({clock})=>{
  let eTime = clock.getElapsedTime()/6;
  ref.current.rotation.y = eTime
  cloudRef.current.rotation.y = eTime
})


  return (
    <>
    <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2}/>
    <Stars fade/>
    <mesh ref={cloudRef}>
    <sphereGeometry args={[1.007, 32,32]}/>
    <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide}/>
    </mesh>
    <mesh ref={ref}>
        <sphereGeometry args={[1, 32,32]}/>
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.335} roughness={0.7}/>
        <OrbitControls />
    </mesh>
    
    </>
  )
}
