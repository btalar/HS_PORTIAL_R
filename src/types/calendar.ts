import { Event as EventProps } from 'react-big-calendar';

export type EventType = EventVariant

export enum EventVariant {
    BOOTCAMP='bootcamp',
    RESERVATION='reservation',
    CONFERENCE='conference'
}

export interface MyEventProps extends EventProps {
    resource?: {
        type: EventType;
    };
}
export interface CalendarStore {
    activeView:'month'|'week'|'day'|'agenda';
    setActiveView:(active:'month'|'week'|'day'|'agenda') => void;
    events:MyEventProps[];
}
