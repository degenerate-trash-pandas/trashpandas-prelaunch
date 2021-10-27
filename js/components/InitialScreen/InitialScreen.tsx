import styles from "./InitialScreen.module.css";

const InitialScreen = () => {
    return (
        <div className={`screen-container ${styles.container}`}>
            <div className="top-icons">
                <img src="/assets/Logo.png"/>
                <img src="/assets/Bin_Open.png"/>
            </div>
            <div className={styles.mainContainer}>
                <img className={styles.coverImage} src="/assets/TrashImages.png" />
                <div className={styles.textContainer}>
                    <h1>
                        Trash <br /> Pandas
                    </h1>
                    <p>The pre-launch site</p>
                    <h2>WAGMI</h2>
                </div>
            </div>
        </div>
    )
}

export default InitialScreen
