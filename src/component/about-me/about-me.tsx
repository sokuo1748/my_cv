import styles from '@/component/about-me/about-me.module.scss';
export default function AboutMe() {
    return (<>
        <div className={`${styles.aboutMeContainer}`}>
            <div className={`${styles.aboutMeMain}`}>
                <div className={`${styles.leftBackGroundColor}`}>
                    <div className={`${styles.PersonalMain}`}>
                        <div className={`${styles.photo}`}>
                            <img src="assets\image\Personal_photo.png" alt="photo" />
                        </div>
                        <div className={`${styles.titleName}`}>
                            <span>陳暐龍</span>
                            <span>Sokuo</span>
                        </div>
                        <div className={`${styles.position}`}>
                            <p>Frontend Engineer</p>
                            <p>前端工程師 </p>
                        </div>      
                    </div>
                </div>  
                <div className={`${styles.rightBackGroundColor}`}>
                    <div className={`${styles   }`}>

                    </div>
                </div>

            </div>
            <div className={`${styles.leftBackGroundColor}`}></div>
            <div className={`${styles.rightBackGroundColor}`}></div>
        </div>
    </>)
}   