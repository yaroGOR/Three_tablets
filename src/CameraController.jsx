import  { useEffect } from "react";
import {  useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const CameraController = () => {
   const { camera, gl } = useThree();
   useEffect(
      () => {
         const controls = new OrbitControls(camera, gl.domElement);
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