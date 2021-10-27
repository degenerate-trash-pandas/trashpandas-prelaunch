import styles from "./FreensScreen.module.css";
import React from "react";

const FreensScreen = (props: {goNext : () => void, goToMenu: () => void}) => {
    return (
        <div className={`screen-container ${styles.container}`}>
            <div className="top-icons">
                <img onClick={props.goNext} src="/assets/Logo.png"/>
                <img onClick={props.goToMenu} src="/assets/Bin_Open.png"/>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.textContainer}>
                    <h3>Freens</h3>
                    <p>
                        Trash Pandas,above all,believe WAGMI. And because
                        of that, everyone who holds a Degenerate Ape at
                        Midnight PST on October 31st, 2021 will get 1:1
                        (the equivalent Candy Machine tokens to redeem)
                    </p>
                    <p>
                        Because WAGMI,Trash Pandas will be a FairLaunch.
                        What’s that? A fair launch means there’sa 24 hour
                        window to bid, at which point winners will be
                        chosen randomly. If you win the Fair Launch raffle,
                        you’ll be given a Candy Machine token! These are
                        totally fungible tokens,but you can redeem it for
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <img src={"/characters/Red_Panda.png"} />
                </div>
                <div>
                    <h1>+</h1>
                </div>
                <div className={styles.imageContainer}>
                    <img src={"/characters/Red_Ape.png"} />
                </div>




            </div>

        </div>
    )
}

export default FreensScreen
