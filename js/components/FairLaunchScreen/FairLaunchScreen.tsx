import styles from "./FairLaunchScreen.module.css";
import React from "react";

const TheGameScreen = () => {
    return (
        <div className={`screen-container ${styles.container}`}>
            <div className={styles.mainContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>FAIR LAUNCH</h1>
                    <h5 className={styles.subTitle}>(But used properly)</h5>
                    <p>Wen? <b>14th of November.</b></p>
                    <p>
                        A snapshot of ape holder wallets will be taken 6.9 days
                        before the fair launch on the <b>7th of November.</b> Write
                        it down. Don&apos;t forget it. Heck, get it <br />
                        tattooed on your forehead. If you forget to delist and aren&apos;t included, YNGMI.
                    </p>
                    <p>
                        The fair launch (FLP) price range will be announced
                        in the lead up to the drop. The Trash Pandas is what
                        FLP was built for and we believe that it hasn&apos;t been
                        used correctly in past drops. We will be looking to
                        get true price discovery with this fair launch.
                    </p>
                    <p>
                        We will be allowing one bid per wallet and a bid fee of 0.2 SOL
                        will be applied to avoid botting. These funds will be donated to
                        charity following the launch.
                    </p>
                </div>
                <img className={styles.coverImage} src={"/assets/FairLaunchToken2.gif"}/>
            </div>
        </div>
    )
}

export default TheGameScreen
