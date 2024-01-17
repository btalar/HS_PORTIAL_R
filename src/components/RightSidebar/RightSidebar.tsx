import { Button } from '@nextui-org/react';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { CardDetails, getCurrentCard } from '../../helpers/getCurrentCard.helper';
import { useHotel, useHotelUpdate } from '../../hooks';
import { sidebarStore, useHotelStore } from '../../store';
import { useRightSidebar } from '../../store/useRightSidebar';
import { AdminForm } from '../../types/AdminForm';
import { CardType, HotelKeys, ItemCard } from '../../types/hotel';
import { FormInput } from '../FormInput';
import { FormSubmit } from '../FormSubmit';
import { InputType } from '../HotelForm/inputs';
import { FormWrapper, ScrollWrapper, Sidebar } from './RightSidebar.styled';

export const commonInputs: InputType[] = [
  { name: 'title', type: 'string', label: 'Title' },
  { name: 'subtitle', type: 'string', label: 'Subtitle' },
  { name: 'description', type: 'string', label: 'Description' },
  { name: 'image', type: 'image', label: 'image' },
  { name: 'image1', type: 'image', label: 'image1' },
  { name: 'image2', type: 'image', label: 'image2' },
  { name: 'image3', type: 'image', label: 'image3' },
  { name: 'image4', type: 'image', label: 'image4' },
];

console.log(commonInputs);

const trip: InputType[] = [
  { name: 'location', type: 'string', label: 'Location' },
  { name: 'price', type: 'string', label: 'Price' },
  { name: 'time', type: 'string', label: 'Time' },

];

const food:InputType[] = [
  { name: 'avatarImage', type: 'image', label: 'Avatar image' },

];

const kids:InputType[] = [
  { name: 'avatarImage', type: 'image', label: 'Avatar image' },
];

const others :InputType[] = [
  { name: 'googleType', type: 'string', label: 'Google Type' },
];

export const RightSidebar:FC = () => {
  const [cardDetails, setCardDetails] = useState<CardDetails | null>(null);
  useHotel();

  const { hotel } = useHotelStore();
  const { hide } = sidebarStore();
  const { id, clearId } = useRightSidebar();

  const {
    register,
    formState: { isDirty },
    reset,
    handleSubmit,
    control,
  } = useForm<ItemCard>({ defaultValues: {} });

  useEffect(() => {
    if (hotel) {
      if (id) {
        const details = getCurrentCard(hotel, id);
        if (details) setCardDetails(details);
        hide();
        reset(details?.card);
      } else {
        reset({});
      }
    }
  }, [hide, hotel, id, reset]);

  const resetForm = ():void => reset(hotel && id ? getCurrentCard(hotel, id)?.card : {});

  const { onSubmit } = useHotelUpdate<AdminForm>();

  return (
    <Sidebar isOpen={Boolean(id)}>
      <FormWrapper onSubmit={handleSubmit((data) => {
        if (cardDetails?.cardIndex && cardDetails?.cardItemsIndex) {
          const newArray = [...hotel![HotelKeys.Cards]];
          newArray[cardDetails.cardIndex].items[cardDetails.cardItemsIndex] = { ...data };
          onSubmit({ cards: newArray });
        }
      })}
      >
        <ScrollWrapper hideScrollBar offset={0}>
          {{
            Food: [...food, ...commonInputs],
            Trip: [...trip, ...commonInputs],
            Kids: [...kids, ...commonInputs],
            Google: [...others, ...commonInputs],
          }[cardDetails?.type as CardType]?.map((props) => (
            <FormInput
              control={control}
              register={register}
              {...props}
              key={JSON.stringify(props)}
            />
          ))}
        </ScrollWrapper>
        <FormSubmit isDirty={isDirty} resetForm={resetForm}>
          <Button onClick={clearId}>Zamknij</Button>
        </FormSubmit>
      </FormWrapper>
    </Sidebar>
  );
};
