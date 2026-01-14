import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { moonOutline, sunnyOutline, documentsOutline } from 'ionicons/icons';
import SavingsCard from '../components/ui/SavingsCard';
import { SavingsGoal } from '../types';

const Home: React.FC = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const html = document.documentElement;

        if (isDark) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    const goals: SavingsGoal[] = [
        { id: '1', title: 'Casa', currentAmount: 8450, targetAmount: 15000, percentage: 56, peopleCount: 2 },
        { id: '2', title: 'Vacaciones de Ensueño', currentAmount: 12300, targetAmount: 20000, percentage: 62, peopleCount: 2 },
        { id: '3', title: 'Fondo para Auto Nuevo', currentAmount: 5200, targetAmount: 25000, percentage: 21, peopleCount: 1 },
    ];

    return (
        <IonPage>
            <IonContent fullscreen className="bg-slate-50 dark:bg-slate-950 transition-colors duration-300">


                <div className="px-6 pt-6 pb-6 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
                    <div className="h-6 "></div>
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-light text-slate-800 dark:text-white">
                                Buenos días, <span className="font-semibold">User</span>
                            </h1>
                            <p className="text-slate-400 text-sm mt-1">Tus togetherly's guardados</p>
                        </div>

                        <button
                            onClick={toggleTheme}
                            className="p-4 bg-white dark:bg-slate-800 rounded-full! shadow-sm text-slate-400 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        >
                            <IonIcon icon={isDark ? sunnyOutline : moonOutline} className="text-xl p-3" />
                        </button>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-md p-6 mb-8 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors duration-300">
                        <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Tu balance total</p>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">$25,950.00</h2>
                        <div className="flex items-center text-emerald-500 text-sm font-bold">
                            <span className="mr-1">↗</span> {goals.length} togetherly's activos
                        </div>
                    </div>

                    <div className="space-y-2">
                        {goals.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center opacity-80">
                                <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-full mb-4">
                                    <IonIcon icon={documentsOutline} className="text-3xl text-slate-400" />
                                </div>
                                <h3 className="text-slate-800 dark:text-white font-medium text-lg mb-1">
                                    ¡Está muy vacío por aquí!
                                </h3>
                                <p className="text-slate-400 text-sm max-w-50">
                                    Todavía no tienes togetherly's creados, ¡crea uno ahora!
                                </p>
                            </div>
                        ) : (
                            goals.map(goal => (
                                <div key={String(goal.id)} className="dark:text-white">
                                    <SavingsCard {...goal} />
                                </div>
                            ))
                        )}
                    </div>

                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;