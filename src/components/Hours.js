import React from 'react';

const OpeningHours = () => {
  // Obtén el día actual (0 = domingo, 1 = lunes, ..., 6 = sábado)
  const today = new Date().getDay();

  // Define las horas de apertura para cada día
  const hours = {
    weekday: '10 a.m. - 4 p.m.',
    weekend: '9 a.m. - 8 p.m.'
  };

  // Determina si es un día entre lunes y viernes o si es fin de semana
  const isWeekend = today === 0 || today === 6; // 0 = domingo, 6 = sábado
  const openingHours = isWeekend ? hours.weekend : hours.weekday;

  return (
    <div>
      <h2>Horario de Apertura</h2>
      <p>Hoy estamos abiertos de {openingHours}.</p>
    </div>
  );
};

export default OpeningHours;
