import styles from "./FreensScreen.module.css";
import React from "react";

const FreensScreen = () => {
    return (
        <div className={`screen-container ${styles.container}`}>
            <div className={styles.mainContainer}>
                <div className={styles.textContainer}>
                    <div className={styles.titleImageContainer}>
                        <img src={"/assets/PetsScribble.png"}/>
                    </div>

                    <h3 className={styles.title}>Freens</h3>
                    <p>
                        Because Trash Pandas and Apes have a symbiotic relationship, every Ape holder will receive 1
                        Candy Machine token per Degen Ape that they hold, unlisted. That's right, 1:1. You can then
                        redeem these tokens to adopt your trashy little pals. More details on this below.
                    </p>
                    <p>
                        Holders of Apes or Trash Pandas will receive the utility benefits supplied by the other. But not
                        only that, holders of both simultaneously will receive their own unique rewards. These multi
                        holder benefits will be added to over time.
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
