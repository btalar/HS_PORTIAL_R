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

const trip: InputType[] = [
  { name: 'title', type: 'string', label: 'Title' },
  { name: 'location', type: 'string', label: 'Location' },
  { name: 'price', type: 'string', label: 'Price' },
  { name: 'time', type: 'string', label: 'Time' },
  { name: 'description', type: 'string', label: 'Description' },
  { name: 'image', type: 'image', label: 'Image' },
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
            Trip: trip,
            Food: trip,
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
