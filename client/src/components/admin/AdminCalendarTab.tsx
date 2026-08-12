import { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { api } from '../../lib/api';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function AdminCalendarTab() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await api.get('/bookings');
        if (data.success) {
          const calendarEvents = data.data.map((booking: any) => {
            const start = new Date(booking.checkIn);
            // checkOut date is typically exclusive for stays, so the event spans checkIn to checkOut
            const end = new Date(booking.checkOut);
            
            return {
              id: booking.id,
              title: `${booking.name} - ${booking.roomType}`,
              start,
              end,
              allDay: true,
              resource: booking,
            };
          });
          setEvents(calendarEvents);
        }
      } catch (err) {
        console.error('Failed to fetch bookings for calendar', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  if (loading) {
    return <div className="p-8 text-cream/60">Loading calendar...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl text-cream">Booking Calendar</h2>
        <p className="text-sm text-cream/50">Visual overview of all glamping stays</p>
      </div>

      <div className="bg-white p-4 rounded-xl" style={{ height: '700px' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%', color: '#333' }}
          views={['month', 'week', 'day']}
          defaultView="month"
          eventPropGetter={(event) => {
            let backgroundColor = '#C9A84C'; // gold
            if (event.resource.status === 'confirmed') backgroundColor = '#10B981'; // emerald
            if (event.resource.status === 'cancelled') backgroundColor = '#EF4444'; // red
            
            return {
              style: {
                backgroundColor,
                borderRadius: '4px',
                opacity: 0.9,
                color: 'white',
                border: '0px',
                display: 'block'
              }
            };
          }}
          tooltipAccessor={(e: any) => `${e.title}\nStatus: ${e.resource.status}\nGuests: ${e.resource.guests}`}
        />
      </div>
    </div>
  );
}
