export interface Hotel{
    id?:string;
    [HotelKeys.Name]: string;
    [HotelKeys.BuildNumber]: string;
    [HotelKeys.City]: string;
    [HotelKeys.Street]: string;
    //
    [HotelKeys.NavbarConnectToWifi]: boolean;
    [HotelKeys.NavbarContactInfo]: boolean;
    [HotelKeys.NavbarHotelEvents]: boolean;
    [HotelKeys.NavbarMobileApp]: boolean;
    [HotelKeys.NavbarNear]: boolean;
    [HotelKeys.NavbarSpecialOffers]: boolean;
    [HotelKeys.NavbarTaxiOrder]: boolean;
    //
    [HotelKeys.CardRestaurant]: boolean;
    [HotelKeys.CardWiFi]: boolean;
    [HotelKeys.CardTown]: boolean;
    [HotelKeys.CardOpinion]: boolean;
    [HotelKeys.CardHotelEvent]: boolean;
    [HotelKeys.CardOffer]: boolean;
    [HotelKeys.CardTaxi]: boolean;
    [HotelKeys.CardApp]: boolean;
}

export enum HotelKeys {
    CardRestaurant='cardRestaurant',
    CardWiFi='cardWifi',
    CardTown='cardTown',
    CardOpinion='cardOpinion',
    CardHotelEvent='cardHotelEvent',
    CardOffer='cardOffer',
    CardTaxi='cardTaxi',
    CardApp='cardApp',
    Name = 'name',
    BuildNumber = 'buildNumber',
    City = 'city',
    Street = 'street',
    NavbarConnectToWifi = 'navbarConnectToWifi',
    NavbarContactInfo = 'navbarContactInfo',
    NavbarHotelEvents = 'navbarHotelEvents',
    NavbarMobileApp = 'navbarMobileApp',
    NavbarNear = 'navbarNear',
    NavbarSpecialOffers = 'navbarSpecialOffers',
    NavbarTaxiOrder = 'navbarTaxiOrder',
}
