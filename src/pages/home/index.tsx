import AboutMe from "@/component/about-me/about-me";

export default function HomePage() {
    return (
        <>
            <div className={`homePageMain`}>        
                <AboutMe />
            </div>
        </>
    );
};


HomePage.auth = true;       