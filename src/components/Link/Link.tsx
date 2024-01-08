import { Link as LinkComponent, LinkProps as Props } from '@nextui-org/react';
import { FC, ReactNode } from 'react';

interface LinkProps {
    children:ReactNode;
    href:string;
    size?:'sm'|'md'|'lg';
}

export const Link:FC<LinkProps> = ({ size = 'lg', children, href }) => {
  const props:Props = {
    color: 'foreground',
    size,
    href,
  };
  return <LinkComponent {...props}>{children}</LinkComponent>;
};
