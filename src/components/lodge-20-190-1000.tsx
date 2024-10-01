import React from 'react';
import {useBasicModelSetup} from "../hooks/useBasicModelSetup.ts";

export const Lodge20_190_1000 = () => {
    const { ref, object } = useBasicModelSetup({
        materialsUrl: '/models/Lodge_20x190x1000_bevel.mtl',
        mapUrl: '/textures/texture_wood.jpg',
        normalMapUrl: '/textures/texture_wood_normal.jpg',
        objectUrl: '/models/Lodge_20x190x1000_bevel.obj',
    });

    return (
        <>
            <primitive object={object} ref={ref} />
        </>
    );
};