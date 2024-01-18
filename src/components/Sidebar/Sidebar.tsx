import { Accordion, AccordionItem, Chip, Divider } from '@nextui-org/react';
import FeatherIcon from 'feather-icons-react';
import { FC } from 'react';

import { sidebarStore } from '../../store/sidebarStore';
import { Logo } from '../Logo';
import { SidebarElement } from './components/SidebarElement';
import { Item, LinkList, MenuLink, Sidebar as SidebarWrapper } from './Sidebar.styled';

export const Sidebar:FC = () => {
  const { isSidebarOpen } = sidebarStore();

  return (
    <SidebarWrapper isOpen={isSidebarOpen}>
      <Logo />
      <Divider />
      <SidebarElement name="/" icon={<FeatherIcon size={24} icon="layout" />}>
        <MenuLink href="/">Dashboard</MenuLink>
      </SidebarElement>
      <Accordion
        showDivider={false}
      >
        <AccordionItem
          key="1"
          startContent={<FeatherIcon size={24} icon="monitor" />}
          title={<Item>Pod</Item>}
        >
          <LinkList>
            <MenuLink href="/pod">Informacje hotelowe</MenuLink>
            <MenuLink href="/menu">Menu Restauracja</MenuLink>
            <MenuLink href="/menu">Oferty specjalne</MenuLink>
            <MenuLink href="/menu">Reklamy</MenuLink>
            <MenuLink href="/menu">Web View</MenuLink>
            <MenuLink href="/settings">Ustawienia</MenuLink>
          </LinkList>
        </AccordionItem>
        <AccordionItem
          key="2"
          startContent={<FeatherIcon size={24} icon="award" />}
          title={<Item>Event Manager <Chip color="danger" size="sm">New</Chip></Item>}
        >
          <LinkList>
            <MenuLink href="/events">Wydarzenia</MenuLink>
            <MenuLink href="/amenities">Klienci</MenuLink>
            <MenuLink href="/menu">Sale</MenuLink>
            <MenuLink href="/settings">Warianty menu</MenuLink>
            <MenuLink href="/settings">Opiekunowie</MenuLink>
          </LinkList>
        </AccordionItem>
        <AccordionItem key="3" startContent={<FeatherIcon size={24} icon="award" />} title={<Item>Opinie</Item>}>
          <LinkList>
            <MenuLink href="/events">Ostatnio Dodane</MenuLink>
            <MenuLink href="/amenities">Statystyki</MenuLink>
          </LinkList>
        </AccordionItem>
        <AccordionItem
          key="4"
          startContent={<FeatherIcon size={24} icon="dollar-sign" />}
          title={<Item>Prowizje</Item>}
        >
          <LinkList>
            <MenuLink href="/events">Ostatnio Dodane</MenuLink>
            <MenuLink href="/amenities">Statystyki</MenuLink>
          </LinkList>
        </AccordionItem>
        <AccordionItem
          key="5"
          startContent={(
            <FeatherIcon size={24} icon="alert-triangle" />
            )}
          title={<Item>Zgłoszenia <Chip color="danger" size="sm">New</Chip></Item>}
        >
          <LinkList>
            <MenuLink href="/events">Ostatnio Dodane</MenuLink>
            <MenuLink href="/amenities">Statystyki</MenuLink>
          </LinkList>
        </AccordionItem>
        <AccordionItem
          key="6"
          startContent={(

            <FeatherIcon size={24} icon="tool" />
        )}
          title={<Item>Usterki <Chip color="danger" size="sm">New</Chip></Item>}
        >
          <LinkList>
            <MenuLink href="/events">Ostatnio Dodane</MenuLink>
            <MenuLink href="/amenities">Statystyki</MenuLink>
          </LinkList>
        </AccordionItem>
        <AccordionItem key="7" startContent={<FeatherIcon size={24} icon="shopping-cart" />} title={<Item>Store</Item>}>
          <LinkList>
            <MenuLink href="/events">Ostatnio Dodane</MenuLink>
            <MenuLink href="/amenities">Statystyki</MenuLink>
          </LinkList>
        </AccordionItem>

      </Accordion>
      <SidebarElement name="/" icon={<FeatherIcon size={24} icon="users" />}>
        <MenuLink href="/">Użytkownicy</MenuLink>
      </SidebarElement>
      <SidebarElement name="/" icon={<FeatherIcon size={24} icon="settings" />}>
        <MenuLink href="/">Ustawienia</MenuLink>
      </SidebarElement>
    </SidebarWrapper>
  );
};
