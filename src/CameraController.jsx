import  { useEffect } from "react";
import {  useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const CameraController = () => {
   const {  gl } = useThree();
   const camera = useThree(state => state.camera)

   useEffect(
      () => {
         const controls = new OrbitControls(camera, gl.domElement);
         
         controls.enableZoom=true
         controls.enablePan=true
         controls.enableRotate=true
         controls.zoomSpeed=0.6
         controls.panSpeed=0.5
         controls.rotateSpeed=0.4
         controls.minDistance = 40;
         controls.maxDistance = 50;
         return () => {
           controls.dispose();
         };
      },
      [camera, gl]
   );
   return null;
};