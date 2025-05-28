import styles from '@/component/about-me/about-me.module.scss';

export default function AboutMe() {
    return (
        <div className={styles.aboutMeContainer}>
            <div className={styles.aboutMeMain}>
                <div className={styles.leftBackGroundColor}>
                    <div className={styles.PersonalMain}>
                        <div className={styles.photo}>
                            <img src="/assets/image/Personal_photo.png" alt="photo" />
                        </div>
                        <div className={styles.titleName}>
                            <span>陳暐龍</span>
                            <span>Sokuo</span>
                        </div>
                        <div className={styles.position}>
                            <p>Frontend Engineer</p>
                            <p>前端工程師</p>
                        </div>
                    </div>
                </div>
                <div className={styles.rightBackGroundColor}>
                    <div className={styles.selfIntroduction}>
                        <h1>你好</h1>
                        <div className={styles.greeting}>
                            
                            <p className={styles.subtitle}>這裡是我的簡介</p>
                            <p className={styles.subtitle}>工作經驗與作品展示。</p>
                        </div>
                        <div className={styles.actionButtons}>
                            <button className={styles.resumeBtn}>RESUME</button>
                            <button className={styles.projectsBtn}>PROJECTS</button>
                        </div>
                        <div className={styles.description}>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.</p>
                            <p>I'm a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.leftBackGroundColors}></div>
            <div className={styles.rightBackGroundColors}></div>
        </div>
    );
}