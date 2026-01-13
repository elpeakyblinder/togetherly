import React, { useState } from 'react';
import {
    IonPage,
    IonContent,
    IonIcon,
    useIonLoading,
    useIonToast
} from '@ionic/react';
import {
    personOutline,
    mailOutline,
    lockClosedOutline,
    eyeOutline,
    eyeOffOutline,
    arrowForwardOutline,
    logoGoogle
} from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Register: React.FC = () => {
    const history = useHistory();
    const [presentLoading, dismissLoading] = useIonLoading();
    const [presentToast] = useIonToast();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            presentToast({
                message: 'Las contraseñas no coinciden',
                duration: 2000,
                color: 'danger',
                position: 'top',
                icon: lockClosedOutline
            });
            return;
        }

        await presentLoading({
            message: 'Creando tu cuenta...',
            duration: 1500,
            spinner: 'circles',
        });

        setTimeout(() => {
            console.log("Registrando:", { name, email, password });
            history.push('/home');
        }, 1500);
    };

    return (
        <IonPage>
            <IonContent fullscreen className="transition-colors duration-300">
                <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

                    <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 p-8 border border-slate-100 dark:border-slate-800">

                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                Crear Cuenta
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">
                                Únete a Togetherly y empieza a ahorrar
                            </p>
                        </div>

                        <form onSubmit={handleRegister} className="space-y-4">

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 ml-1">
                                    Nombre Completo
                                </label>
                                <div className="group flex items-center px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus-within:ring-2 focus-within:ring-slate-900 dark:focus-within:ring-slate-400 focus-within:border-transparent transition-all">
                                    <IonIcon icon={personOutline} className="text-slate-400 text-lg mr-3" />
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        placeholder="Tu nombre"
                                        className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400 text-sm"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 ml-1">
                                    Correo Electrónico
                                </label>
                                <div className="group flex items-center px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus-within:ring-2 focus-within:ring-slate-900 dark:focus-within:ring-slate-400 focus-within:border-transparent transition-all">
                                    <IonIcon icon={mailOutline} className="text-slate-400 text-lg mr-3" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="hola@ejemplo.com"
                                        className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400 text-sm"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 ml-1">
                                    Contraseña
                                </label>
                                <div className="group flex items-center px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus-within:ring-2 focus-within:ring-slate-900 dark:focus-within:ring-slate-400 focus-within:border-transparent transition-all">
                                    <IonIcon icon={lockClosedOutline} className="text-slate-400 text-lg mr-3" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="Crea una contraseña"
                                        className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400 text-sm"
                                        required
                                        minLength={6}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none"
                                    >
                                        <IonIcon icon={showPassword ? eyeOffOutline : eyeOutline} className="text-xl" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 ml-1">
                                    Confirmar Contraseña
                                </label>
                                <div className="group flex items-center px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus-within:ring-2 focus-within:ring-slate-900 dark:focus-within:ring-slate-400 focus-within:border-transparent transition-all">
                                    <IonIcon icon={lockClosedOutline} className="text-slate-400 text-lg mr-3" />
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={e => setConfirmPassword(e.target.value)}
                                        placeholder="Repite la contraseña"
                                        className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400 text-sm"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none"
                                    >
                                        <IonIcon icon={showConfirmPassword ? eyeOffOutline : eyeOutline} className="text-xl" />
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full h-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-sm! font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                            >
                                <span>Crear cuenta</span>
                                <IonIcon icon={arrowForwardOutline} className="text-xl" />
                            </button>

                        </form>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white dark:bg-slate-900 px-2 text-slate-400">O</span>
                            </div>
                        </div>

                        <button className="w-full py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                            <IonIcon icon={logoGoogle} className="text-lg" />
                            <span>Regístrate con servicio</span>
                        </button>

                        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                            ¿Ya tienes cuenta?{' '}
                            <button
                                onClick={() => history.push('./login')}
                                className="font-bold text-slate-900 dark:text-white hover:underline"
                            >
                                Inicia Sesión
                            </button>
                        </p>

                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Register;