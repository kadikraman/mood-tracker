import React from 'react';
import { Svg, Path, G, Circle } from 'react-native-svg';

type ListIconProps = {
  color?: string;
  size?: number;
};

export const ListIcon: React.FC<ListIconProps> = ({
  color = 'teal',
  size = 40,
}) => {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 0 60.123 60.123">
      <G>
        <Path d="M57.124,51.893H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,51.893,57.124,51.893z" />
        <Path
          d="M57.124,33.062H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3
        C60.124,31.719,58.781,33.062,57.124,33.062z"
        />
        <Path d="M57.124,14.231H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,14.231,57.124,14.231z" />
        <Circle cx="4.029" cy="11.463" r="4.029" />
        <Circle cx="4.029" cy="30.062" r="4.029" />
        <Circle cx="4.029" cy="48.661" r="4.029" />
      </G>
    </Svg>
  );
};
