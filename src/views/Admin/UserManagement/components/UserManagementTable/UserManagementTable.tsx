import {
  ButtonGroup,
  Table as TableNextUi,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader, TableRow,
} from '@nextui-org/react';
import React, { FC, Key, useCallback } from 'react';

import { deleteIcon, edit, eye } from '../../../../../assets';
import { ButtonIcon } from '../../../../../components/ButtonIcon';
import { columns, users } from '../../../../../MOCKS/users';
import { UserProps } from '../../../../../types/UsersType';

interface CellProps {text:string|number}
export const Cell:FC<CellProps> = ({ text }) => <div className="font-14-400">{text}</div>;

export const UserManagementTable:FC = () => {
  const renderCell = useCallback((item:UserProps, columnKey:Key) => {
    const key = String(columnKey) as keyof UserProps;

    if (columnKey === 'actions') {
      const handleClickShowMore = () => {
        console.log('Show More user id:', item.id);
      };
      const handleEdit = () => {
        console.log('Edit id:', item.id);
      };
      const handleRemove = () => {
        console.log('Remove id:', item.id);
      };
      return (
        <ButtonGroup>
          <ButtonIcon noMargin src={eye} onClick={() => handleClickShowMore()} />
          <ButtonIcon noMargin src={edit} onClick={() => handleEdit()} />
          <ButtonIcon noMargin src={deleteIcon} onClick={() => handleRemove()} />
        </ButtonGroup>
      );
    }
    // @ts-ignore
    return <Cell text={item[key]} />;
  }, []);

  return (
    <TableNextUi>
      <TableHeader columns={columns}>
        {({ label, name, uid }) => (
          <TableColumn key={uid} align={name === 'actions' ? 'center' : 'start'}>
            { label }
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users} isLoading emptyContent="No users found">
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </TableNextUi>
  );
};
