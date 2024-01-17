import 'react-big-calendar/lib/css/react-big-calendar.css';

import moment from 'moment';
import { FC } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';

const localizer = momentLocalizer(moment);

const CustomDateHeader = () => (
  <div className="custom-date-header">
    <div className="dh-item header-left">
      <span className="myIcon"> oglądanie filmu z kacprem</span>
    </div>
    <div className="dh-item header-right" />
  </div>
);

export const Calendar:FC = () => (
  <div>
    <BigCalendar
      components={{ month: { dateHeader: CustomDateHeader } }}
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);
