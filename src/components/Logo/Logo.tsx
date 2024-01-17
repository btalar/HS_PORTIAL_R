import { FC } from 'react';

import { logo } from '../../assets';
import { Logos } from './Logo.styled';

export const Logo:FC = () => <Logos classNames={{ wrapper: '!max-w-screen-sm' }} src={logo} />;
