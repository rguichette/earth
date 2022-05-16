import React from 'react'
import { useLoader } from '@react-three/fiber'
import EarthClouds from '../../textures/earth_clouds.jpg'
import EarthDayMap from '../../textures/earth_daymap.jpg'
import EarthNightMap from '../../textures/earth_nightmap.jpg'
import EarthNormalMap from '../../textures/earth_normal_map.jpg'
import EarthSpecularMap from '../../textures/earth_specular_map.jpg'
import { TextureLoader } from 'three'

import * as THREE from 'three'

import { OrbitControls, Stars } from '@react-three/drei'

export default function Earth() {
    const [colorMap, normalMap, specularMap, cloudsMap ] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap,EarthClouds])

  return (
    <>
    <ambientLight intensity={0.5}/>
    <Stars/>
    <mesh>
    <sphereGeometry args={[1.007, 32,32]}/>
    <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide}/>
    </mesh>
    <mesh>
        <sphereGeometry args={[1, 32,32]}/>
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap}/>
        <OrbitControls />
    </mesh>
    
    </>
  )
}
