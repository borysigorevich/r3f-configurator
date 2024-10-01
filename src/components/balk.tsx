import { useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { Group, Mesh, MeshPhongMaterial } from 'three'; // @ts-ignore
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'; // @ts-ignore
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export const Balk = () => {
	const balkRef = useRef<Group | null>(null);

	const materials = useLoader(MTLLoader, '/models/balk_150x150x1000.mtl');
	const object = useLoader(OBJLoader, '/models/balk_150x150x1000.obj', (loader) => {
		materials.preload();
		loader.setMaterials(materials);
	});

	const texture = useTexture({
		normalMap: '/textures/texture_wood_normal.jpg',
		map: '/textures/texture_wood.jpg',
	});

	useEffect(() => {
		if (!balkRef.current) return;

		const bulkMaterial = (balkRef.current.children[0] as Mesh)
			.material as MeshPhongMaterial;

		bulkMaterial.map = texture.map;
		bulkMaterial.normalMap = texture.normalMap;
	}, []);

	return (
		<>
			<primitive object={object} ref={balkRef} />
		</>
	);
};
