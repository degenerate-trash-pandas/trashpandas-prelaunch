import styles from "./DescriptionScreen.module.css";
import React from "react";

const DescriptionScreen = (props: { goNext: () => void, goToMenu: () => void }) => {
    return (
        <div className={`screen-container ${styles.container}`}>
            <div className="top-icons">
                <img onClick={props.goToMenu} src="/assets/Logo.png"/>
                <img onClick={props.goNext} src="/assets/Bin_Closed.png"/>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.coverImageContainer}>
                    <img className={styles.coverImage} src="/characters/TrashKing.png"/>
                </div>
                <div className={`${styles.textContainer} mobile-text-container`}>
                    <div className={styles.textPContainer}>
                        <h1 className={styles.textCenter}>
                            WAGMI
                        </h1>
                        <p>Trash Pandas,above all,believe WAGMI. And because
                            of that, everyone who holds a Degenerate Ape at
                            Midnight PST on October 31st, 2021 will get 1:1
                            (the equivalent Candy Machine tokens to redeem)</p>
                        <p>
                            Because WAGMI,Trash Pandas will be a FairLaunch.
                            What’s that? A fair launch means there’sa 24 hour
                            window to bid, at which point winners will be
                            chosen randomly. If you win the Fair Launch raffle,
                            you’ll be given a Candy Machine token! These are
                            totally fungible tokens,but you can redeem it for
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionScreen
