import styles from './header.module.scss';
import { useAppContext } from '@/context/appContext';
export default function Header() {

    const { navbar, activeItem, setActiveItem } = useAppContext();

    const navbarItem = () => {
        return (<>
            <div className={`${styles.navbarContainer}`}>
                {navbar.map((item: any) => (
                    <>
                        <div className={`${styles.navbarButton} ${activeItem === item.label ? styles.active : ''
                            }`}
                            key={item.key}
                            onClick={() => {
                                setActiveItem(item.label)
                            }}>
                            {item.label}
                        </div>

                    </>


                ))}
            </div>
        </>)
    }
    return (
        <>
            <div className={`${styles.headerContainer}`}>
                <div className={`${styles.leftTitle}`}>
                    <div className={`${styles.icon}`}></div>
                    <div className={`${styles.titleName}`}>
                        <span>陳暐龍</span>
                        <span>Sokuo</span>
                    </div>
                    <div className={`${styles.position}`}>
                        Frontend Engineer
                    </div>
                </div>
                <div className={`${styles.rightButton}`}>
                    {navbarItem()}
                </div>

            </div>
        </>
    )
}