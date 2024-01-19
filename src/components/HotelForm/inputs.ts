import { Hotel, HotelKeys, ItemCard, Language } from '../../types/hotel';

export interface InputType {
      name?:HotelKeys |
      keyof ItemCard|'settings.language';
      label:string ;
      type:'string'|'boolean'|'image'|'select';
      options?:string[];
}

export const formInputHotel: InputType[] = [
  { name: HotelKeys.Name, label: 'Nazwa hotelu', type: 'string' },
  { name: HotelKeys.City, label: 'Miasto', type: 'string' },
  { name: HotelKeys.Street, label: 'Ulica', type: 'string' },
  { name: HotelKeys.BuildNumber, label: 'Numer budynku', type: 'string' },
];

export const formInputNavbar: InputType[] = [
  { name: HotelKeys.NavbarHotelEvents, label: 'Wydarzenia hotelowe [Navbar Button]', type: 'boolean' },
  { name: HotelKeys.NavbarConnectToWifi, label: 'Połącz z WiFi [Navbar Button]', type: 'boolean' },
  { name: HotelKeys.NavbarContactInfo, label: 'Informacje kontaktowe [Navbar Button]', type: 'boolean' },
  { name: HotelKeys.NavbarMobileApp, label: 'Aplikacja mobilna [Navbar Button]', type: 'boolean' },
  { name: HotelKeys.NavbarNear, label: 'W pobliżu [Navbar Button]', type: 'boolean' },
  { name: HotelKeys.NavbarSpecialOffers, label: 'Specjalne oferty [Navbar Button]', type: 'boolean' },
  { name: HotelKeys.NavbarTaxiOrder, label: 'Zamów taksówkę [Navbar Button]', type: 'boolean' },
];

export const formInputCard: InputType[] = [
  { name: HotelKeys.CardRestaurant, label: 'Karta Restauracji', type: 'boolean' },
  { name: HotelKeys.CardWiFi, label: 'Karta WiFi', type: 'boolean' },
  { name: HotelKeys.CardTown, label: 'Karta Miasta', type: 'boolean' },
  { name: HotelKeys.CardOpinion, label: 'Karta Opinii', type: 'boolean' },
  { name: HotelKeys.CardHotelEvent, label: 'Karta Wydarzeń w Hotelu', type: 'boolean' },
  { name: HotelKeys.CardOffer, label: 'Oferta Karty', type: 'boolean' },
  { name: HotelKeys.CardTaxi, label: 'Karta Taksówki', type: 'boolean' },
  { name: HotelKeys.CardApp, label: 'Karta Aplikacji', type: 'boolean' },
];

export const defaultValues:Hotel = {
  settings: { language: Language.EN },
  cards: [],
  cardApp: false,
  cardHotelEvent: false,
  cardOffer: false,
  cardOpinion: false,
  cardRestaurant: false,
  cardTaxi: false,
  cardTown: false,
  cardWifi: false,
  name: '',
  street: '',
  city: '',
  buildNumber: '',
  navbarConnectToWifi: false,
  navbarContactInfo: false,
  navbarNear: false,
  navbarHotelEvents: false,
  navbarMobileApp: false,
  navbarSpecialOffers: false,
  navbarTaxiOrder: false,
};
