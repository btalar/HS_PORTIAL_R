import { Accordion, AccordionItem, Divider } from '@nextui-org/react';
import { FC } from 'react';

import { admin, pod, signature } from '../../assets';
import { sidebarStore } from '../../store/sidebarStore';
import { ButtonIcon } from '../ButtonIcon';
import { Link } from '../Link';
import { Logo } from '../Logo';
import { SidebarElement } from './components/SidebarElement';
import { LinkList, Sidebar as SidebarWrapper, SidebarInside } from './Sidebar.styled';

export const Sidebar:FC = () => {
  const { isOpen, toggle } = sidebarStore();

  return (
    <SidebarWrapper isOpen={isOpen}>
      <Logo />
      <Divider />
      <SidebarInside>
        <SidebarElement name="/" icon={<ButtonIcon onClick={toggle} src={signature} />}>
          <Link href="/">Hotelspot</Link>
        </SidebarElement>
        <SidebarElement icon={<ButtonIcon onClick={toggle} src={pod} />}>
          <Accordion className="px-0">
            <AccordionItem
              title={<p className="font-14-400">Pod</p>}
            >
              <LinkList>
                <Link href="/pod">Dane hotelowe</Link>
                <Link href="/amenities">Udogodnienia</Link>
                <Link href="/menu">Menu resturacji</Link>
                <Link href="/settings">Ustawienia</Link>
              </LinkList>
            </AccordionItem>
          </Accordion>
        </SidebarElement>
        <SidebarElement name="/admin" icon={<ButtonIcon onClick={toggle} src={admin} />}>
          <Link href="/admin">Admin</Link>
        </SidebarElement>
        <SidebarElement icon={<ButtonIcon onClick={toggle} src={pod} />}>
          <Accordion className="px-0">
            <AccordionItem
              title={<p className="font-14-400">Zarządzanie konferencjami</p>}
            >
              <LinkList>
                <Link href="/events">Wydarzenia</Link>
                <Link href="/amenities">Klienci</Link>
                <Link href="/menu">Sale</Link>
                <Link href="/settings">Warianty menu</Link>
                <Link href="/settings">Opiekunowie</Link>
              </LinkList>
            </AccordionItem>
          </Accordion>
        </SidebarElement>

      </SidebarInside>
    </SidebarWrapper>
  );
};
