import React from 'react';
import { IonIcon } from '@ionic/react';
import { peopleOutline } from 'ionicons/icons'; // Quité arrowForwardOutline que no se usaba
import { SavingsGoal } from '../../types';

const SavingsCard: React.FC<SavingsGoal> = ({ 
    title, 
    currentAmount, 
    targetAmount, 
    percentage, 
    peopleCount 
}) => {

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        // 1. Contenedor: bg-white -> dark:bg-slate-900, border -> dark:border-slate-800
        <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl mb-4 border border-slate-100 dark:border-slate-800 shadow-sm active:scale-95 transition-all duration-200">
            
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                    {/* 2. Círculo del icono: bg-slate-50 -> dark:bg-slate-800 */}
                    <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-xl">
                        💰
                    </div>
                    <div>
                        {/* 3. Título: text-slate-800 -> dark:text-white */}
                        <h3 className="font-semibold text-slate-800 dark:text-white text-lg leading-tight transition-colors">{title}</h3>
                        {peopleCount > 1 && (
                            <div className="flex items-center text-xs text-slate-400 mt-0.5">
                                <IonIcon icon={peopleOutline} className="mr-1" />
                                <span>{peopleCount} colaboradores</span>
                            </div>
                        )}
                    </div>
                </div>
                
                {/* 4. Badge %: Invertimos colores para contraste. Fondo blanco en modo oscuro, texto negro */}
                <div className="bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full transition-colors">
                    {percentage}%
                </div>
            </div>

            <div className="flex justify-between items-end mb-3">
                <div className="flex flex-col">
                    <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">Progreso</span>
                    {/* 5. Cantidad Actual: text-slate-900 -> dark:text-white */}
                    <span className="text-2xl font-semibold text-slate-900 dark:text-white transition-colors">{formatCurrency(currentAmount)}</span>
                </div>
                <div className="flex flex-col items-end pb-1">
                    <span className="text-slate-400 text-xs font-medium">Meta</span>
                    {/* 6. Meta: Ajuste ligero del gris */}
                    <span className="text-slate-500 dark:text-slate-400 font-semibold text-sm">{formatCurrency(targetAmount)}</span>
                </div>
            </div>

            {/* 7. Barra de fondo: bg-slate-100 -> dark:bg-slate-800 */}
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden transition-colors">
                {/* 8. Relleno de barra: bg-slate-900 -> dark:bg-slate-200 (Blanco brillante) */}
                <div 
                    className="bg-slate-900 dark:bg-slate-200 h-2.5 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default SavingsCard;