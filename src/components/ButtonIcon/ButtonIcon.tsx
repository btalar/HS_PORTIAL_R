import { Image } from '@nextui-org/react';
import { FC, MouseEventHandler } from 'react';

import { ButtonIcon as Button } from './ButtonIcon.styled';

interface ButtonIconProps {
    onClick?:MouseEventHandler<HTMLButtonElement>;
    src?:string;
    noMargin?:boolean;
}

export const ButtonIcon:FC<ButtonIconProps> = ({ onClick, noMargin, src }) => (
  <Button noMargin={noMargin} isIconOnly onClick={onClick}>
    <Image radius="none" width={20} height={20} src={src} />
  </Button>
);
