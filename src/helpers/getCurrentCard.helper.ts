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

  const noCards = !cards.length;

  if (noCards) {
    return null;
  }

  const split1 = Number(split[1]);
  const split3 = Number(split[3]);
  const card = cards[split1].items[split3];

  const { type } = cards[split1];
  return { card, type, cardIndex: split1, cardItemsIndex: split3 };
};
