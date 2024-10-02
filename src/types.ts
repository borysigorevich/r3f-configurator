import { ReactNode } from 'react';

export type TransformType = [number, number, number];

export type BaseTransformType = {
	position?: TransformType;
	rotation?: TransformType;
	scale?: TransformType;
};

export type BasicModelProps = {
	children?: ReactNode;
} & BaseTransformType;
