interface ColumnProps {name:string;uid:string;label:string}

export const columns:ColumnProps[] = [
  { name: 'CHECKBOX', uid: 'checkbox', label: 'checkbox' },
  { name: 'LP', uid: 'id', label: 'LP.' },
  { name: 'NAME', uid: 'type', label: 'typ imprezy' },
  { name: 'DATE_FROM', uid: 'dateFrom', label: 'data od' },
  { name: 'STATUS', uid: 'dateTo', label: 'data do' },
  { name: 'ACTIONS', uid: 'room', label: 'sala' },
  { name: 'CLIENT', uid: 'client', label: 'klient' },
  { name: 'ATTENDANT', uid: 'attendant', label: 'opiekun' },
  { name: 'ATTENDANT', uid: 'status', label: 'status' },
  { name: 'ATTENDANT', uid: 'actions', label: 'actions' },

];

export interface EventProps {
    id:number;
    type: 'conference'|'school';
    dateFrom:string;
    dateTo:string;
    room:string;
    client:string;
    attendant:string;
    status: 'in_progress'|'stoped'|'done';
}

export const events:EventProps[] = [
  {
    id: 1,
    type: 'conference',
    dateFrom: '02.02.2001',
    dateTo: '03.12.2021',
    room: 'Restauracja, Sala malinowa',
    client: 'Start Travel Sp. z o. o.',
    status: 'in_progress',
    attendant: 'Kacper Drewniak',
  },
];
