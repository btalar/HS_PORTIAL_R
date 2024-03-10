import {
  ButtonGroup,
  Checkbox, Table as TableNextUi, TableBody,
  TableCell, TableColumn, TableHeader, TableRow, User,
} from '@nextui-org/react';
import { FC, Key, useCallback } from 'react';

import { deleteIcon, edit, eye } from '../../assets';
import { columns, EventProps, events } from '../../MOCKS/events';
import { ButtonIcon } from '../ButtonIcon';
import { Cell } from './partials/Cell';

export const Table:FC = () => {
  const renderCell = useCallback((event:EventProps, columnKey:Key) => {
    const key = String(columnKey) as keyof EventProps | 'checkbox' |'actions';

    if (key === 'checkbox') {
      return <Checkbox />;
    }

    if (key === 'type') {
      return (
        <User
          avatarProps={{ radius: 'lg', src: 'https://picsum.photos/200/300' }}
          name={<Cell text={event[key]} />}
        />
      );
    }

    if (key === 'actions') {
      return (
        <ButtonGroup>
          <ButtonIcon noMargin src={eye} />
          <ButtonIcon noMargin src={edit} />
          <ButtonIcon noMargin src={deleteIcon} />
        </ButtonGroup>
      );
    }
    return <Cell text={event[key]} />;
  }, []);

  return (
    <TableNextUi>
      <TableHeader columns={columns}>
        {({ label, name, uid }) => (
          <TableColumn key={uid} align={name === 'actions' ? 'center' : 'start'}>
            {label === 'checkbox' ? <Checkbox /> : label.toUpperCase()}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={events}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </TableNextUi>
  );
};
