import { Accordion, AccordionItem } from '@nextui-org/react';
import { FC } from 'react';

import { admin, pod, signature } from '../../assets';
import { sidebarStore } from '../../store/sidebarStore';
import { ButtonIcon } from '../ButtonIcon';
import { Link } from '../Link';
import { SidebarElement } from './components/SidebarElement';
import { Sidebar as SidebarWrapper } from './Sidebar.styled';

export const Sidebar:FC = () => {
  const { isOpen, toggle } = sidebarStore();
  return (
    <SidebarWrapper isOpen={isOpen}>
      <SidebarElement icon={<ButtonIcon onClick={toggle} src={signature} />}>
        <Link href="/">Hotelspot</Link>
      </SidebarElement>
      <SidebarElement icon={<ButtonIcon onClick={toggle} src={pod} />}>
        <Accordion className="px-0">
          <AccordionItem hideIndicator key="1" aria-label="Accordion" title="Pod">
            <Link href="/pod">Dane hotelowe</Link>
            <Link href="/pod">Udogodnienia</Link>
            <Link href="/pod">Menu resturacji</Link>
            <Link href="/settings">Ustawienia</Link>
          </AccordionItem>
        </Accordion>
      </SidebarElement>
      <SidebarElement icon={<ButtonIcon onClick={toggle} src={admin} />}>
        <Link href="/admin">Admin</Link>
      </SidebarElement>
    </SidebarWrapper>
  );
};
