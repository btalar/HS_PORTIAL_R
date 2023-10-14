import { render, RenderOptions, RenderResult } from '@testing-library/react';
import React from 'react';

const Providers: React.FC = ({ children }: React.PropsWithChildren) => <div>{children}</div>;

export const tpRender = (ui: React.ReactElement, options?: RenderOptions):
  RenderResult => render(ui, { wrapper: Providers, ...options });
