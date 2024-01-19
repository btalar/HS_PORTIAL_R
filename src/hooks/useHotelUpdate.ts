import { doc, updateDoc } from 'firebase/firestore';
import { FieldValues, SubmitHandler } from 'react-hook-form';

import { db } from '../config';
import { useHotelStore } from '../store';
import { useToast } from './useToast';

export const useHotelUpdate = <T extends FieldValues>():{onSubmit: SubmitHandler<T>} => {
  const { hotel } = useHotelStore();
  const { showError, showSuccess } = useToast();
  const onSubmit:SubmitHandler<T> = async (value) => {
    console.log(hotel?.id);
    console.log(value);

    if (!hotel?.id) {
      return;
    }
    try {
      const hotelDoc = doc(db, 'hotel', hotel?.id);
      await updateDoc(hotelDoc, { ...value });
      showSuccess('Succesffully updated');
    } catch (err) {
      console.log(err);
      showError(JSON.stringify(err));
    }
  };

  return { onSubmit };
};
