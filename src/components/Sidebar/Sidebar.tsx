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
        <MenuLink to="/">Dashboard</MenuLink>
      </SidebarElement>
      <Accordion
        showDivider={false}
        disabledKeys={['3']}
      >
        <AccordionItem
          key="1"
          startContent={<FeatherIcon size={24} icon="monitor" />}
          title={<Item>Pod</Item>}
        >
          <LinkList>
            <MenuLink to="/pod">Informacje hotelowe</MenuLink>
            <MenuLink to="/menu">Menu Restauracja</MenuLink>
            <MenuLink to="/menu">Oferty specjalne</MenuLink>
            <MenuLink to="/menu">Reklamy</MenuLink>
            <MenuLink to="/menu">Web View</MenuLink>
            <MenuLink to="/settings">Ustawienia</MenuLink>
          </LinkList>
        </AccordionItem>
        <AccordionItem
          key="2"
          startContent={<FeatherIcon size={24} icon="award" />}
          title={<Item>Event Manager <Chip color="danger" size="sm">New</Chip></Item>}
        >
          <LinkList>
            <MenuLink to="/events">Wydarzenia</MenuLink>
            <MenuLink to="/amenities">Klienci</MenuLink>
            <MenuLink to="/menu">Sale</MenuLink>
            <MenuLink to="/settings">Warianty menu</MenuLink>
            <MenuLink to="/settings">Opiekunowie</MenuLink>
          </LinkList>
        </AccordionItem>
        <AccordionItem
          key="3"
          startContent={<FeatherIcon size={24} icon="award" />}
          title={<Item>Opinie</Item>}
          subtitle="Niedostępnę w twoim planie"
        >
          <LinkList>
            <MenuLink to="/events">Ostatnio Dodane</MenuLink>
            <MenuLink to="/amenities">Statystyki</MenuLink>
          </LinkList>
        </AccordionItem>
        <AccordionItem
          key="4"
          startContent={<FeatherIcon size={24} icon="dollar-sign" />}
          title={<Item>Prowizje</Item>}
        >
          <LinkList>
            <MenuLink to="/events">Ostatnio Dodane</MenuLink>
            <MenuLink to="/amenities">Statystyki</MenuLink>
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
            <MenuLink to="/events">Ostatnio Dodane</MenuLink>
            <MenuLink to="/amenities">Statystyki</MenuLink>
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
            <MenuLink to="/events">Ostatnio Dodane</MenuLink>
            <MenuLink to="/amenities">Statystyki</MenuLink>
          </LinkList>
        </AccordionItem>
        <AccordionItem key="7" startContent={<FeatherIcon size={24} icon="shopping-cart" />} title={<Item>Store</Item>}>
          <LinkList>
            <MenuLink to="/events">Ostatnio Dodane</MenuLink>
            <MenuLink to="/amenities">Statystyki</MenuLink>
          </LinkList>
        </AccordionItem>

      </Accordion>
      <SidebarElement name="/" icon={<FeatherIcon size={24} icon="users" />}>
        <MenuLink to="/">Użytkownicy</MenuLink>
      </SidebarElement>
      <SidebarElement name="/" icon={<FeatherIcon size={24} icon="settings" />}>
        <MenuLink to="/">Ustawienia</MenuLink>
      </SidebarElement>
      <SidebarElement name="/" icon={<FeatherIcon size={24} icon="settings" />}>
        <MenuLink to="/admin">Admin</MenuLink>
      </SidebarElement>
    </SidebarWrapper>
  );
};
