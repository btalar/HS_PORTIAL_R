import { UserProps } from '../types/UsersType';

interface ColumnProps {name:string;uid:string;label?:string }
export const columns:ColumnProps[] = [
  { name: 'USER_NAME', uid: 'userName', label: 'Użytkownik' },
  { name: 'PHONE', uid: 'phone', label: 'Telefon' },
  { name: 'EMAIL', uid: 'email', label: 'E-mail' },
  { name: 'COMPANY_NAME', uid: 'companyName', label: 'Nazwa Firmy' },
  { name: 'CITY', uid: 'city', label: 'Miasto' },
  { name: 'TYPE', uid: 'role', label: 'Typ' },
  { name: 'actions', uid: 'actions' },
];

export const users:UserProps[] = [
  {
    id: '1',
    userName: 'Dominika Kolalski',
    companyName: 'Mercure Gdańsk Stare Miasto',
    email: 'test@gmail.com',
    phone: '+48 726 695 100',
    city: 'Gdańsk',
    role: 'ADMIN',
  },
  {
    id: '2',
    userName: 'Dominika Kolalski',
    companyName: 'Mercure Gdańsk Stare Miasto',
    email: 'test@gmail.com',
    phone: '+48 726 695 100',
    city: 'Gdańsk',
    role: 'ADMIN',
  },
];
