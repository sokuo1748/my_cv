
import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface NavbarItem {
    key: string;
    label: string;
}

type AppContextType = {
    navbar: NavbarItem[],
    activeItem: string,
    setActiveItem: (item: string) => void,
}
const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider: React.FC<{ children: ReactNode }> = ({
    children
}) => {
    const [navbar] = useState<NavbarItem[]>([
        { key: 'aboutMe', label: 'ABOUT ME' },
        { key: 'resume', label: 'RESUME' },
        { key: 'projects', label: 'PROJECTS' }
    ])
    const [activeItem, setActiveItem] = useState<string>('ABOUT ME');

    useEffect(() => {
        console.log("確認activeItem", activeItem)
    }, [activeItem])

    const value = {
        navbar,
        activeItem,
        setActiveItem
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}
export function useAppContext() {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }

    return context;
}