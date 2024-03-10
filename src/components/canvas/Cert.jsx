import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Preload,
} from "@react-three/drei";

import CanvasLoader from "../Loader";


const Cert = (props) => {
    const objToRender = [props.certSelector]
    const obj = useGLTF(`./certs/${objToRender}/scene.gltf`);
    //const [decal] = useTexture([props.imgUrl]);

    return (
        <mesh>
      <hemisphereLight intensity={4} groundColor='black' />
      <pointLight intensity={10} />
      <spotLight
        angle={1}
        penumbra={1}
        decay={2}
        intensity={500}
        shadow-mapSize={1024}
      />
      <primitive
        object={obj.scene}
        scale={60}
        position={[0, -5, 0]}
        rotation={[4, 0, -1]}
      />
    </mesh>
    );
};

const CertCanvas = ({ identifier }) => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          //autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <Cert certSelector={identifier} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CertCanvas;