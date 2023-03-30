import React from "react";

const Cilinder = () => {
  return (
    <mesh receiveShadow={true}>
      <cylinderBufferGeometry
        receiveShadow={true}
        position={[100, 0, 0]}
        attach="geometry"
        args={[50, 50, 0.1]}
      />
      <meshPhongMaterial attach="material" color="rgb(243, 243, 243)" />
    </mesh>
  );
};

export default Cilinder;
