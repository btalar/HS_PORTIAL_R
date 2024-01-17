import { Button, ButtonGroup } from '@nextui-org/react';
import React, { FC, MouseEventHandler, ReactNode } from 'react';

interface FormSubmitProps{
    isDirty:boolean;
    resetForm?:MouseEventHandler<HTMLButtonElement>;
    children?:ReactNode;
}

export const FormSubmit:FC<FormSubmitProps> = ({ isDirty, resetForm, children }) => (
  <ButtonGroup>
    {children}
    <Button
      style={{ opacity: isDirty ? 1 : 0.3 }}
      color="warning"
      disabled={!isDirty}
      onClick={resetForm}
    >Cofnij
    </Button>
    <Button style={{ opacity: isDirty ? 1 : 0.3 }} color="danger" disabled={!isDirty} type="submit">Zapisz</Button>
  </ButtonGroup>
);
