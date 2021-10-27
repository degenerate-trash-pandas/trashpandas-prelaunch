import styles from "./DescriptionScreen.module.css";

const DescriptionScreen = () => {
    return (
        <div className={`screen-container ${styles.container}`}>
            <div className="top-icons">
                <img src="/assets/Logo.png"/>
                <img src="/assets/Bin_Open.png"/>
            </div>
            <div className={styles.mainContainer}>
                <img className={styles.coverImage} src="/characters/Panda_Red.png" />
                <div className={styles.textContainer}>
                    <h1>
                        HOME
                    </h1>
                    <h1>
                        WAGMI
                    </h1>
                    <h1>
                        FRENS
                    </h1>
                    <h1>
                        THEGAME
                    </h1>
                    <h1>
                        WAGMI
                    </h1>

                </div>
            </div>
        </div>
    )
}

export default DescriptionScreen
