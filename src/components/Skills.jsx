import React from "react";
import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { CycleRaycast, BakeShadows, useCursor, Text } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";

export const Skills = ({ updateTextureA, props }) => {
  const eyeTex = useLoader(TextureLoader, "./models/Image_eye_0.png");
  const normalIris = useLoader(TextureLoader, "./models/Image_0.png");
  const sharingan = useLoader(TextureLoader, "./models/Image_1.png");
  const mangikyou = useLoader(TextureLoader, "./models/Image_2.png");
  const rinnegan = useLoader(TextureLoader, "./models/Image_3.png");

  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) =>
    ref.current.scale.setScalar(
      hovered ? 1 + Math.sin(state.clock.elapsedTime * 10) / 50 : 1
    )
  );
  // Sets document.body.style.cursor: useCursor(flag, onPointerOver = 'pointer', onPointerOut = 'auto')
  useCursor(hovered);

  return (
    <>
      <mesh
        {...props}
        ref={ref}
        receiveShadow
        castShadow
        position={[-6, 0, 0]}
        onClick={(e) => (e.stopPropagation(), setClicked(!clicked))}
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={(e) => setHovered(false)}
      >
        <boxGeometry args={[3, 1.3, 0.075]} />
        <meshStandardMaterial
          roughness={1}
          transparent
          opacity={0.6}
          color={
            // clicked ? updateTextureA(sharingan) :
            hovered ? updateTextureA(sharingan) : "white"
          }
        />
        <Text anchorX="center" anchorY="middle" color="red">
          Skills
        </Text>
      </mesh>
    </>
  );
};
