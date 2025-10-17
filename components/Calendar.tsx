
import React, { useState, useEffect } from 'react';

const Calendar: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="text-center p-2"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === today && month === currentMonth && year === currentYear;
      days.push(
        <div
          key={day}
          className={`text-center p-2 rounded-full flex items-center justify-center h-10 w-10 transition-colors duration-200 ${
            isToday
              ? 'bg-blue-600 text-white font-bold shadow-md'
              : 'text-slate-700 hover:bg-blue-100'
          }`}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  const changeMonth = (delta: number) => {
    setDate(current => {
      const newDate = new Date(current);
      newDate.setMonth(current.getMonth() + delta);
      return newDate;
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg h-full">
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Calendario de Disponibilidad</h3>
      <p className="text-slate-500 mb-6">Consulte nuestra disponibilidad general. Para agendar un servicio, por favor contáctenos directamente.</p>
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-slate-100 transition-colors">
          <i className="fas fa-chevron-left text-slate-500"></i>
        </button>
        <h4 className="text-xl font-semibold text-slate-800 w-48 text-center">
          {monthNames[month]} {year}
        </h4>
        <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-slate-100 transition-colors">
          <i className="fas fa-chevron-right text-slate-500"></i>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center font-bold text-slate-500 text-sm p-2">
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
