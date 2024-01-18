import { FC } from 'react';

interface CellProps {text:string|number}
export const Cell:FC<CellProps> = ({ text }) => <div className="font-14-400">{text}</div>;
