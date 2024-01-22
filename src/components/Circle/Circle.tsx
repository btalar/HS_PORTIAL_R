import { Image } from '@nextui-org/react';
import { FC } from 'react';

import { check } from '../../assets';
import { Circle as CircleWrapper } from './Circle.styled';

interface CircleProps {
    active:boolean;
    complete:boolean;
    label:number;
}
export const Circle:FC<CircleProps> = ({ active, complete, label }) => (
  <CircleWrapper active={active} complete={complete}>
    {complete ? <Image src={check} /> : <span>{label}</span> }
  </CircleWrapper>
);
