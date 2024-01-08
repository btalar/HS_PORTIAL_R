import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';

import { db } from '../config';
import { useHotelStore } from '../store';
import { Hotel } from '../types/hotel';

const FIRST_INDEX = 0;
export const HOTEL_INDEX_REF = collection(db, 'hotel');

export const useHotel = ():void => {
  const { onUpdateHotel } = useHotelStore();
  useEffect(() => {
    const unsubscribe = onSnapshot(HOTEL_INDEX_REF, ({ docs }) => {
      const hotel = { ...docs[FIRST_INDEX].data(), id: docs[FIRST_INDEX].id } as Hotel;
      onUpdateHotel(hotel);
    });
    return () => {
      unsubscribe();
    };
  }, [onUpdateHotel]);
};
