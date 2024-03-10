import { FC, ReactNode } from 'react';

import { PageTitleActionBar, PageTitleWrapper, Title } from './PageTitle.styled';

interface PageTitleProps {
    actions?: ReactNode;
    title: string;
}
export const PageTitle:FC<PageTitleProps> = ({ actions, title }) => (
  <PageTitleWrapper>
    <Title>{title}</Title>
    {actions && (
      <PageTitleActionBar>{actions}</PageTitleActionBar>
    )}
  </PageTitleWrapper>

);
