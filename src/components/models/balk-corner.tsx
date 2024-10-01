import React from 'react';
import {useBasicModelSetup} from "../../hooks/useBasicModelSetup.ts";

export const BalkCorner = () => {
 const { ref, object } = useBasicModelSetup({
  materialsUrl: '/models/balk_corner.mtl',
  mapUrl: '/textures/texture_wood.jpg',
  normalMapUrl: '/textures/texture_wood_normal.jpg',
  objectUrl: '/models/balk_corner.obj',
 });

 return (
     <>
      <primitive object={object} ref={ref} />
     </>
 );
};