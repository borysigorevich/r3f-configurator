import React from 'react';
import {useBasicModelSetup} from "../hooks/useBasicModelSetup.ts";

export const Ruberoid1000_1000_2 = () => {
    const { ref, object } = useBasicModelSetup({
        materialsUrl: '/models/ruberoid_1000x1000x2.mtl',
        mapUrl: '/textures/texture_wood.jpg',
        normalMapUrl: '/textures/texture_wood_normal.jpg',
        objectUrl: '/models/ruberoid_1000x1000x2.obj',
    });

    return (
        <>
            <primitive object={object} ref={ref} />
        </>
    );
};