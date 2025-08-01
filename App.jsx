import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useSpline } from '@splinetool/r3f-spline';
import { OrthographicCamera } from '@react-three/drei';

function Scene() {
  const { nodes, materials } = useSpline('https://prod.spline.design/ppWasZmbVOrekfDZ/scene.splinecode');
  
  return (
    <>
      <color attach="background" args={['#000000']} />
      <group>
        <scene name="Scene 1">
          <mesh
            name="Sphere 2"
            geometry={nodes['Sphere 2'].geometry}
            material={materials['Sphere 2 Material']}
            castShadow
            receiveShadow
            position={[-384, -179, -536]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh 
            name="Sphere" 
            geometry={nodes.Sphere.geometry} 
            material={materials['Sphere Material']} 
          />
          <OrthographicCamera
            name="Camera"
            makeDefault={true}
            far={100000}
            near={-100302}
            up={[0, 1, 0]}
            position={[577.35, 577.35, 577.35]}
            rotation={[-Math.PI / 4, 0.62, Math.PI / 6]}
            scale={1}
          />
          <group name="Group 2" position={[0, -116.95, 0]} rotation={[0, 0, 0]}>
            <pointLight
              name="Point Light 2"
              castShadow
              decay={10}
              distance={10000}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={100}
              shadow-camera-far={100000}
              color="#fece00"
              position={[0, -86.08, 0]}
            />
            <group name="reflection" position={[0, -328.62, 1.5]} rotation={[0, 0, -Math.PI]} scale={[-1, 1, 1]}>
              <mesh name="Out" geometry={nodes.Out.geometry} material={materials.Out} position={[0, -197.65, -1.5]} />
              <mesh
                name="In"
                geometry={nodes.In.geometry}
                material={materials['']}
                receiveShadow
                position={[0, -197.65, -1.5]}
                scale={0.99}
              />
            </group>
            <group name="timedoor" position={[0, 127.62, 1.5]}>
              <mesh name="Out1" geometry={nodes.Out1.geometry} material={materials.Out} position={[0, -197.65, -1.5]} />
              <mesh
                name="In1"
                geometry={nodes.In1.geometry}
                material={materials['']}
                receiveShadow
                position={[0, -197.65, -1.5]}
                scale={0.99}
              />
            </group>
            <mesh
              name="Plane 3"
              geometry={nodes['Plane 3'].geometry}
              material={materials['Plane 3 Material']}
              castShadow
              receiveShadow
              position={[0, -111.68, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <OrthographicCamera name="1" makeDefault={false} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  );
}

export default function App() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}
