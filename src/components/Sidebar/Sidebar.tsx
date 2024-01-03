import { Button, Image } from '@nextui-org/react';
import { FC } from 'react';

import { signature } from '../../assets';
import { sidebarStore } from '../../store/sidebarStore';
import { SidebarStyled } from './Sidebar.styled';

export const Sidebar:FC = () => {
  const { isOpen, toggle } = sidebarStore();
  return (
    <SidebarStyled isOpen={isOpen}>
      <Button isIconOnly onClick={toggle}>
        <Image width={20} height={20} src={signature} />
      </Button>
    </SidebarStyled>
  );
};
