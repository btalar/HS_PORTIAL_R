import { LinkProps as Props } from '@nextui-org/react';
import { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import { Link as LinkComponent } from './Link.styled';

interface LinkProps {
    children:ReactNode;
    href:string;
    size?:'sm'|'md'|'lg';
    isActive?:boolean;
}

export const Link:FC<LinkProps> = ({ size = 'lg', children, href }) => {
  const { pathname } = useLocation();
  const props:Props = {
    color: 'foreground',
    size,
    href,
  };
  return <LinkComponent isActive={pathname === href} className="font-14-400" {...props}>{children}</LinkComponent>;
};
