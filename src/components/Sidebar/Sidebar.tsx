import { Accordion, AccordionItem, Divider } from '@nextui-org/react';
import FeatherIcon from 'feather-icons-react';
import { FC } from 'react';

import { sidebarStore } from '../../store/sidebarStore';
import { Link } from '../Link';
import { Logo } from '../Logo';
import { SidebarElement } from './components/SidebarElement';
import { LinkList, Sidebar as SidebarWrapper, SidebarInside } from './Sidebar.styled';

export const Sidebar:FC = () => {
  const { isOpen } = sidebarStore();

  return (
    <SidebarWrapper isOpen={isOpen}>
      <Logo />
      <Divider />
      <SidebarInside>
        <SidebarElement name="/" icon={<FeatherIcon icon="layout" />}>
          <Link href="/">Dashboard</Link>
        </SidebarElement>
        <SidebarElement name="/admin" icon={<FeatherIcon icon="shield" />}>
          <Link href="/admin">Admin</Link>
        </SidebarElement>
        <SidebarElement icon={<FeatherIcon icon="monitor" />}>
          <Accordion className="px-0">
            <AccordionItem
              title={<p className="font-14-400">Pod's</p>}
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
        <SidebarElement icon={<FeatherIcon icon="award" />}>
          <Accordion className="px-0">
            <AccordionItem
              title={<p className="font-14-400">Event Manager</p>}
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
        <SidebarElement name="/" icon={<FeatherIcon icon="message-circle" />}>
          <Link href="/">Opinie</Link>
        </SidebarElement>
        <SidebarElement name="/" icon={<FeatherIcon icon="dollar-sign" />}>
          <Link href="/">Prowizje</Link>
        </SidebarElement>
        <SidebarElement name="/" icon={<FeatherIcon icon="alert-triangle" />}>
          <Link href="/">Zgłoszenia</Link>
        </SidebarElement>
        <SidebarElement name="/" icon={<FeatherIcon icon="tool" />}>
          <Link href="/">Usterki</Link>
        </SidebarElement>
        <SidebarElement name="/" icon={<FeatherIcon icon="shopping-cart" />}>
          <Link href="/">Store</Link>
        </SidebarElement>
        <SidebarElement name="/" icon={<FeatherIcon icon="settings" />}>
          <Link href="/">Ustawienia</Link>
        </SidebarElement>
      </SidebarInside>
    </SidebarWrapper>
  );
};
