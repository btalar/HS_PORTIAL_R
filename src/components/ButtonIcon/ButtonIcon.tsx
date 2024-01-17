import { Image } from '@nextui-org/react';
import { FC, MouseEventHandler } from 'react';

import { ButtonIcon as Button } from './ButtonIcon.styled';

interface ButtonIconProps {
    onClick?:MouseEventHandler<HTMLButtonElement>;
    src?:string;
}

export const ButtonIcon:FC<ButtonIconProps> = ({ onClick, src }) => (
  <Button isIconOnly onClick={onClick}>
    <Image radius="none" width={20} height={20} src={src} />
  </Button>
);
