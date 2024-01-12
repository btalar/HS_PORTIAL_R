import { Button, ButtonGroup } from '@nextui-org/react';
import React, { FC, MouseEventHandler } from 'react';

interface FormSubmitProps{
    isDirty:boolean;
    resetForm?:MouseEventHandler<HTMLButtonElement>;
}

export const FormSubmit:FC<FormSubmitProps> = ({ isDirty, resetForm }) => (
  <ButtonGroup style={{ opacity: isDirty ? 1 : 0.3 }}>
    <Button
      color="warning"
      disabled={!isDirty}
      onClick={resetForm}
    >Cofnij
    </Button>
    <Button color="danger" disabled={!isDirty} type="submit">Zapisz</Button>
  </ButtonGroup>
);
