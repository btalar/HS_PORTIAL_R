export enum HotelKeys {
    Cards = 'cards',
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
    Settings='settings'
}

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
    [HotelKeys.Cards]:Card[];
    [HotelKeys.Settings]: Settings;
}

export interface Settings{
    language:Language;
}

export enum Language{
    PL='PL',
    EN='EN',
    DE='DE',
}

export enum CardType {
    Food='Food',
    Trip='Trip'
}

export interface Card {
    type:CardType;
    title:string;
    items:{
        title:string;

        // trip
        image:string;
        price:string;
        time:string;

        // food
        location:string;
    }[];
}
