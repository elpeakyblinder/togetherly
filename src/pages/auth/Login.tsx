import React, { useState } from 'react';
import {
    IonPage,
    IonContent,
    IonInput,
    IonIcon,
    useIonLoading
} from '@ionic/react';
import {
    logInOutline,
    eyeOutline,
    eyeOffOutline,
    mailOutline,
    lockClosedOutline,
    logoGoogle
} from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
    const history = useHistory();
    const [present, dismiss] = useIonLoading();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        await present({
            message: 'Iniciando sesión...',
            duration: 1500,
            spinner: 'circles',
        });

        console.log("Datos:", { email, password });

        setTimeout(() => {
            dismiss();
            history.push('/home');
        }, 1500);
    };

    return (
        <IonPage>
            <IonContent fullscreen className="transition-colors duration-300">
                <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

                    <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 p-8 border border-slate-100 dark:border-slate-800">

                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
                                logo
                            </div>
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                ¡Bienvenido de nuevo!
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">
                                Ingresa tus credenciales para acceder a Togetherly
                            </p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-5">

                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 ml-1">
                                    Correo Electrónico
                                </label>
                                <div className="group flex items-center px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus-within:ring-2 focus-within:ring-slate-900 dark:focus-within:ring-slate-400 focus-within:border-transparent transition-all">
                                    <IonIcon icon={mailOutline} className="text-slate-400 text-lg mr-3" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="ejemplo@correo.com"
                                        className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400 text-sm"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                        Contraseña
                                    </label>
                                </div>
                                <div className="group flex items-center px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus-within:ring-2 focus-within:ring-slate-900 dark:focus-within:ring-slate-400 focus-within:border-transparent transition-all">
                                    <IonIcon icon={lockClosedOutline} className="text-slate-400 text-lg mr-3" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400 text-sm"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none"
                                    >
                                        <IonIcon icon={showPassword ? eyeOffOutline : eyeOutline} className="text-xl" />
                                    </button>

                                </div>
                                <button type="button" className="text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline">
                                    ¿Olvidaste tu contraseña?
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full h-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-sm! font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                            >
                                <span>Iniciar Sesión</span>
                                <IonIcon icon={logInOutline} className="text-xl" />
                            </button>

                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white dark:bg-slate-900 px-2 text-slate-400">O continúa con</span>
                            </div>
                        </div>

                        <button className="w-full py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                            <IonIcon icon={logoGoogle} className="text-lg" />
                            <span>Servicio de ejemplo</span>
                        </button>

                        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                            ¿Aún no tienes cuenta?{' '}
                            <button
                                onClick={() => history.push('./register')}
                                className="font-bold text-slate-900 dark:text-white hover:underline"
                            >
                                Regístrate
                            </button>
                        </p>

                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;