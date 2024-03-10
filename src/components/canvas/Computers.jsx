import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { extend } from '@react-three/fiber'

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  //const computer = useGLTF("./apollo_intensa_emozione/scene.gltf");
  const objToRender = "neon_artroom"
  const obj = useGLTF(`./${objToRender}/scene.gltf`);

  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor='black' />
      <pointLight intensity={0} />
      <spotLight
        angle={1}
        penumbra={1}
        decay={2}
        intensity={13}
        shadow-mapSize={1024}
      />
      <primitive
        object={obj.scene}
        scale={isMobile ? 0.18 : 0.25}
        position={isMobile ? [0.25, -2, 0] : [0, -2, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;