import styles from './footer.module.scss';
export default function Footer() {
    return (<>
        <div className={`${styles.footerContainer}`}>
            <div className={`${styles.leftTitle}`}>
                <span>© 2025 by sokuo 版權所有.</span>
                <span>個人履歷 v1.0.0</span>
            </div>
            <div className={`${styles.rightTitle}`}>
                <div className={`${styles.phone}`}>
                    <div><i className="bi bi-telephone-outbound"></i> Phone :</div>
                    <div>0905-232-087</div>
                </div>
                <div className={`${styles.email}`}>

                    <div><i className="bi bi-envelope"></i> Gmail :</div>
                    <div>sokuo1748@gmail.com</div>
                </div>
            </div>
        </div>
    </>)
}   