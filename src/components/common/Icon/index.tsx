import { SVGProps } from 'react';

import * as iconTypes from './lib';

export type IconTypes = keyof typeof iconTypes;

export interface IconProps extends SVGProps<SVGSVGElement> {
	name: IconTypes;
	rotate?: number;
	size?: number;
}

const Icon = ({ name, rotate, size = 24, ...props }: IconProps) => {
	const IconComponent = iconTypes[name];

	return <IconComponent width={size} height={size} {...props} transform={`rotate(${rotate || 0})`} />;
};

export default Icon;
