import React from "react";

const Lights = () => {
  return (
    <>
      <pointLight position={[10, 20, 20]} intensity={1.3} castShadow={true} />
      <ambientLight intensity={0.02} />
    </>
  );
};

export default Lights;
