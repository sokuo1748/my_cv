import AboutMe from "@/component/about-me/about-me";
import { useAppContext } from "@/context/appContext";
import { useCallback } from "react";

export default function HomePage() {
    const { activeItem } = useAppContext();

    console.log('activeItem', activeItem)
    const page = useCallback(() => {
        switch (activeItem) {
            case 'ABOUT ME':
                return <AboutMe />
            case 'RESUME':
                return (<>
                    <div>123</div>
                </>)
            case 'PROJECTS':
                return (<>
                    <div>456</div>
                </>)
        }
    }, [activeItem])
    return (
        <>
            <div className={`homePageMain`}>
                {page()}
            </div>
        </>
    );
};


HomePage.auth = true;       