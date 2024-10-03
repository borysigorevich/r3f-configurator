import { useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import { Group, Mesh, MeshPhongMaterial } from 'three'; // @ts-ignore
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'; // @ts-ignore
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

type UseBasicModelSetupParams = {
	materialsUrl: string;
	objectUrl: string;
	normalMapUrl: string;
	mapUrl: string;
};

export const useBasicModelSetup = ({
	materialsUrl,
	mapUrl,
	normalMapUrl,
	objectUrl,
}: UseBasicModelSetupParams) => {
	const ref = useRef<Group | null>(null);

	const materials = useLoader(MTLLoader, materialsUrl);
	const object = useLoader(OBJLoader, objectUrl, (loader) => {
		materials.preload();
		loader.setMaterials(materials);
	});

	const texture = useTexture({
		normalMap: normalMapUrl,
		map: mapUrl,
	});

	useEffect(() => {
		if (!ref.current) return;
		const mesh = ref.current.children[0] as Mesh;
		const balkMaterial = mesh.material as MeshPhongMaterial;

		// mesh.castShadow = true;
		mesh.receiveShadow = true;

		balkMaterial.map = texture.map;
		balkMaterial.normalMap = texture.normalMap;
	}, []);

	const clonedObject = useMemo(() => object.clone(), [object]);

	return {
		ref,
		object: clonedObject,
	};
};
