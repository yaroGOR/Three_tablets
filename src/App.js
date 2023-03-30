import { Canvas } from "react-three-fiber";
import "./App.css";

import { Model } from "./Model";
import { CameraController } from "./CameraController.jsx";
import Cilinder from "./Cilinder";
import Fog from "./Fog";
import Lights from "./Lights";

function App() {
  return (
    <>
      <Canvas shadows id="canvas">
        <Model />

        <CameraController />
        <Cilinder />
        <Fog />
        <Lights />
      </Canvas>
    </>
  );
}

export default App;
