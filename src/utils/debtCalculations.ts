import { DebtTask } from '../types';

// Configuración del Castigo
const TAX_RATE = 0.1; // 10% de interés diario compuesto (Brutal pero justo)

export const calculateChaosTax = (task: DebtTask): number => {
    const created = new Date(task.createdDate);
    const now = new Date();

    // Días pasados (mínimo 0)
    const diffTime = Math.abs(now.getTime() - created.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 1) return 0; // El primer día es gratis (gracia)

    // Fórmula de Interés Compuesto: A = P(1 + r)^t
    // P = Base Cost
    // r = Tax Rate
    // t = Días de retraso
    const currentCost = task.baseCost * Math.pow((1 + TAX_RATE), diffDays);

    return Math.floor(currentCost - task.baseCost); // Retornamos solo el IMPUESTO extra
};

export const calculateTotalDebt = (tasks: DebtTask[]) => {
    let baseDebt = 0;
    let accumulatedTax = 0;

    tasks.filter(t => t.status === 'active').forEach(task => {
        const tax = calculateChaosTax(task);
        baseDebt += task.baseCost;
        accumulatedTax += tax;
    });

    return {
        baseMinutes: baseDebt,
        taxMinutes: accumulatedTax,
        totalMinutes: baseDebt + accumulatedTax
    };
};