import { ScrollShadow } from '@nextui-org/react';
import styled from 'styled-components';

export const Main = styled(ScrollShadow)`
    max-height: Calc(100vh - 128px);
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
