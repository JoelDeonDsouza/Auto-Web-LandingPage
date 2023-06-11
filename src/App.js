import React from "react";
import NavigationRoutes from "./Navigation/Routes";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/auto2.glb");
  return <primitive object={scene} {...props} />;
}
function App() {
  return (
    <div>
      <NavigationRoutes />
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 45 }}
        style={{ position: "absolute" }}
      >
        <color attach="background" args={["#FFFFFF"]} />
        <PresentationControls
          speed={1.5}
          global
          zoom={10}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={"sunset"}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default App;
