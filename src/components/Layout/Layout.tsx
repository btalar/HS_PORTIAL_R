import React, { FC, ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}
export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="flex justify-center">{children}</div>
);
