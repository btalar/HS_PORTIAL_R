import { CardType, Hotel, HotelKeys, ItemCard } from '../types/hotel';

export interface CardDetails {
  card:ItemCard;
  cardIndex:number;
  cardItemsIndex:number;
  type:CardType;
}

export const getCurrentCard = (hotel:Hotel, id:string): CardDetails| null => {
  const split = id.split('.');

  const cards = hotel[HotelKeys.Cards];
  // @ts-ignore
  const { type } = cards[split[1]];
  // @ts-ignore
  return { card: cards[split[1]].items[split[3]], type, cardIndex: split[1], cardItemsIndex: split[3] };
};
