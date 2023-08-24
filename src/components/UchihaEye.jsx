import { useRef, useState, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";
import { Decal, useTexture, useGLTF, Environment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Vector3 } from "three";

export default function UchihaEye({ materialA, ...props }) {
  const groupRef = useRef();
  const { scene, nodes, materials } = useGLTF("./models/eyeTest.glb");
  const eyeTex = useLoader(TextureLoader, "./models/Image_eye_0.png");
  const normalIris = useLoader(TextureLoader, "./models/Image_0.png");
  // const sharingan = useLoader(TextureLoader, "./models/Image_1.png");
  // const mangikyou = useLoader(TextureLoader, "./models/Image_2.png");
  // const rinnegan = useLoader(TextureLoader, "./models/Image_3.png");

  const ref = useRef();
  const vec = new Vector3();
  const [hovered, setHovered] = useState(false);
  let targetRotation = 0;
  useFrame(({ mouse, viewport }) => {
    nodes.Eye_Iris_0.material.map = normalIris;
    ref.current.position.lerp(
      vec.set(mouse.x, -mouse.y, ref.current.position.z),
      0.03
    );
    const x = (mouse.x * viewport.width) / 20;
    const y = (mouse.y * viewport.height) / 20;
    ref.current.lookAt(x, y, 1);
    targetRotation += (Math.PI / 180) * 30 * 2;
    ref.current.rotation.z = hovered
      ? MathUtils.lerp(nodes.Eye_Iris_0.rotation.z, -targetRotation, 0.01)
      : MathUtils.lerp(nodes.Eye_Iris_0.rotation.z, 0, 0.01);
    nodes.Eye_Iris_0.material.map = materialA;
    // if (hovered) {
    //   console.log("working");
    //   scene.traverse((child) => {
    //     if (child.isMesh) {
    //       // Assuming there's only one material for each mesh
    //       nodes.Eye_Iris_0.material.map = rinnegan;
    //       //nodes.Eye_Eye_0.material.map = eyeTex;
    //       // child.material.needsUpdate = true;
    //     }
    //   });
    // } else {
    //   scene.traverse((child) => {
    //     if (child.isMesh) {
    //       // Assuming there's only one material for each mesh
    //       //child.material.map = normalEye;
    //       nodes.Eye_Iris_0.material.map = normalIris;
    //       //nodes.Eye_Eye_0.material.map = eyeTex;
    //       //child.material.needsUpdate = true;
    //     }
    //   });
    // }
  });

  return (
    <>
      <mesh
        {...props}
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive
          object={scene}
          scale={[0.01, 0.01, 0.01]}
          rotation={[Math.PI * 10, Math.PI, Math.PI * 0.45]}
        />
        {props.children}
      </mesh>
    </>
  );
}
useGLTF.preload("./models/eyeTest.glb");
