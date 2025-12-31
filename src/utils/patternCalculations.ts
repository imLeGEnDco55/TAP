import { DailyEntry } from '../types';

export interface PatternStats {
  totalDaysLogged: number;
  avgFlow: number;
  avgChaos: number;
  bestDay: string; // "Lunes", "Martes"...
  trend: 'rising' | 'falling' | 'stable'; // Tendencia de Flow
  heatmap: { date: string; intensity: number; type: 'flow' | 'chaos' | 'mixed' }[];
}

export const calculatePatterns = (entries: DailyEntry[]): PatternStats => {
  if (entries.length === 0) {
    return { totalDaysLogged: 0, avgFlow: 0, avgChaos: 0, bestDay: 'N/A', trend: 'stable', heatmap: [] };
  }

  // 1. Promedios
  const totalFlow = entries.reduce((acc, curr) => acc + curr.flow, 0);
  const totalChaos = entries.reduce((acc, curr) => acc + curr.chaos, 0);
  const avgFlow = totalFlow / entries.length;
  const avgChaos = totalChaos / entries.length;

  // 2. Mejor Día de la Semana
  const daysScore: Record<number, number> = { 0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0 }; // 0=Domingo
  const daysCount: Record<number, number> = { 0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0 };

  entries.forEach(e => {
    const day = new Date(e.date).getDay();
    daysScore[day] += e.flow;
    daysCount[day]++;
  });

  let bestDayIndex = 0;
  let maxAvg = 0;
  for (let i = 0; i <= 6; i++) {
    if (daysCount[i] > 0) {
      const avg = daysScore[i] / daysCount[i];
      if (avg > maxAvg) {
        maxAvg = avg;
        bestDayIndex = i;
      }
    }
  }
  const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  // 3. Tendencia (Últimos 3 días vs Anterior)
  const last3 = entries.slice(-3);
  const prev3 = entries.slice(-6, -3);
  const avgLast = last3.reduce((acc, c) => acc + c.flow, 0) / (last3.length || 1);
  const avgPrev = prev3.reduce((acc, c) => acc + c.flow, 0) / (prev3.length || 1);
  
  let trend: 'rising' | 'falling' | 'stable' = 'stable';
  if (avgLast > avgPrev * 1.1) trend = 'rising';
  if (avgLast < avgPrev * 0.9) trend = 'falling';

  // 4. Heatmap Data (Últimos 14 días)
  const heatmap = entries.slice(-14).map(e => {
    let type: 'flow' | 'chaos' | 'mixed' = 'mixed';
    if (e.flow > e.chaos * 1.5) type = 'flow';
    else if (e.chaos > e.flow * 1.5) type = 'chaos';
    
    // Intensidad 0-10 basada en 8 horas max
    const intensity = Math.min(10, Math.max(1, Math.floor((e.flow + e.chaos) / 8 * 10)));
    
    return { date: e.date, intensity, type };
  });

  return {
    totalDaysLogged: entries.length,
    avgFlow: Number(avgFlow.toFixed(1)),
    avgChaos: Number(avgChaos.toFixed(1)),
    bestDay: dayNames[bestDayIndex],
    trend,
    heatmap
  };
};
