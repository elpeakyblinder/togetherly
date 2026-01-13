export interface SavingsGoal {
    id: string;
    title: string;
    currentAmount: number;
    targetAmount: number;
    percentage: number;
    peopleCount: number;
}

export interface MainLayoutProps {
    isDark: boolean;
    toggleTheme: () => void;
}