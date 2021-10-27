import styles from "./MenuScreen.module.css";

const MenuScreen = () => {
    return (
        <div className={`screen-container ${styles.container}`}>

            <div className={`${styles.separator} ${styles.firstSeparator}`}>
            </div>
            <div className={`${styles.separator} ${styles.secondSeparator}`}>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.textContainer}>
                    <h3>
                        HOME
                    </h3>
                    <h3>
                        WAGMI
                    </h3>
                    <h3>
                        FRENS
                    </h3>
                    <h3>
                        THE GAME
                    </h3>
                    <h3>
                        LAUNCH
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default MenuScreen
