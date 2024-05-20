import { useState } from "react";
import { a, useSpring } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";

const ImperativeAPI = () => {


  // const [click, setClick] = useState(false);

  // const { scale, color } = useSpring({
  //   from: { scale: click ? 1 : 2, color: click ? "orange" : "hotpink" },
  //   scale: click ? 2 : 1,
  //   color: click ? "hotpink" : "orange",
  // });

  // console.log(scale);

  // const clickHandler = () => {
  //   setClick(!click);
  // };

  const [spring, api] = useSpring(() => ({
    from: { x: 0 },
  }))

  const clickHandler = () => {
    api.start({
      to: { x: spring.x.get() === 2 ? 0 : 2} 
    
    }) 
    // Assim que clicarmos na malha, esta função será chamada para iniciar a animação.
  }

  console.log(spring);

  useFrame(() => {
    console.log(spring.x.get());
  });



  return (

    <>

      <a.mesh 
      onClick={clickHandler}

      position-x={spring.x}
      >
        <boxGeometry />
        <a.meshBasicMaterial color="green" />
      </a.mesh>

    </>


  );
};

export default ImperativeAPI;
