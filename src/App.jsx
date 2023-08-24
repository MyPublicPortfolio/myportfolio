import { Canvas, useThree, useFrame } from "@react-three/fiber";
import UchihaEye from "./components/UchihaEye";
import {
  Environment,
  useGLTF,
  Float,
  PivotControls,
  QuadraticBezierLine,
  Backdrop,
  ContactShadows,
  Stats,
  Effects,
  Lightformer,
} from "@react-three/drei";
import { useState, useRef } from "react";
import { Vector3 } from "three";
import { Skills } from "./components/Skills";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { CommonInfo } from "./components/CommonInfo";
import { useLoader } from "@react-three/fiber";
// function Rig() {
//   const { camera, mouse } = useThree();
//   const vec = new Vector3();

//   return useFrame(() => {
//     camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05);
//     camera.lookAt(0, 0, 0);
//   });
// }

export default function App() {
  const normalIris = useLoader(TextureLoader, "./models/Image_0.png");
  // const sharingan = useLoader(TextureLoader, "./models/Image_1.png");
  // const mangikyou = useLoader(TextureLoader, "./models/Image_2.png");
  // const rinnegan = useLoader(TextureLoader, "./models/Image_3.png");

  const [materialTexture, setMaterialTexture] = useState(normalIris);

  const handleTextureUpdateA = (newTexture) => {
    setMaterialTexture(newTexture);
  };
  const handleTextureUpdateB = (newTexture) => {
    setMaterialTexture(newTexture);
  };
  const handleTextureUpdateC = (newTexture) => {
    setMaterialTexture(newTexture);
  };

  return (
    <>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <Backdrop
          castShadow
          floor={1}
          position={[0, -4, -2]}
          scale={[50, 25, 4]}
        >
          <meshStandardMaterial color="white" metalness={1} roughness={0.4} />
        </Backdrop>
        {/* <directionalLight position={[0, 0, 2]} /> */}

        {/* <ambientLight intensity={2} /> */}
        <UchihaEye position={[0, 0, 0]} materialA={materialTexture} />
        <Environment preset="city" />
        {/* <Stats /> */}

        <Skills updateTextureA={handleTextureUpdateA} />
        <Experience updateTextureB={handleTextureUpdateB} />
        <About updateTextureC={handleTextureUpdateC} />
      </Canvas>
      <CommonInfo />
    </>
  );
}
