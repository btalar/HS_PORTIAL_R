import { Button, Input } from '@nextui-org/react';
import { FC, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { CardDetails, getCurrentCard } from '../../helpers/getCurrentCard.helper';
import { useHotel, useHotelUpdate } from '../../hooks';
import { sidebarStore, useHotelStore } from '../../store';
import { useRightSidebar } from '../../store/useRightSidebar';
import { AdminForm } from '../../types/AdminForm';
import { CardType, HotelKeys, ItemCard } from '../../types/hotel';
import { FormImage } from '../FormImage';
import { FormSubmit } from '../FormSubmit';
import { FormWrapper, ScrollWrapper, Sidebar } from './RightSidebar.styled';

interface LocalCard {
  name: keyof ItemCard;
  type:'string'|'image'|'imageArray';
}

const trip: LocalCard[] = [
  { name: 'title', type: 'string' },
  { name: 'location', type: 'string' },
  { name: 'price', type: 'string' },
  { name: 'time', type: 'string' },
  { name: 'description', type: 'string' },
  { name: 'image', type: 'image' },
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

  const resetForm = ():void => reset(getCurrentCard(hotel!, id!)?.card);

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
          }[cardDetails?.type as CardType]?.map(({ name, type }) => ({
            string: <Input placeholder={name} label={name} key={name} {...register(name)} />,
            image: <Controller
              control={control}
              render={({ field: { onChange, value } }) => <FormImage onChange={onChange} value={String(value)} />}
              name={name}
            />,
            imageArray: <Input key={name} {...register(name)} />,
          }[type]))}
        </ScrollWrapper>
        <FormSubmit isDirty={isDirty} resetForm={resetForm}>
          <Button onClick={clearId}>Zamknij</Button>
        </FormSubmit>
      </FormWrapper>
    </Sidebar>
  );
};
