import styles from "./DescriptionScreen.module.css";
import React from "react";

const DescriptionScreen = () => {
    return (
        <div className={`screen-container ${styles.container}`}>
            <div className={styles.mainContainer}>
                <div className={styles.coverImageContainer}>
                    <img className={styles.coverImage} src="/characters/TrashKing.png" />
                </div>
                <div className={`${styles.textContainer} mobile-text-container`}>
                    <div className={styles.textPContainer}>

                        <p>The Degeniverse is expanding. We are the <b>Degenerate Trash Pandas</b>. A collection of 20K cunning
                            critters that live for one thing and one thing only: To scavenge the blockchain.</p>
                        <p>
                            Inhabiting their own underworld society, the Trash Pandas are governed by no individuals and
                            live by no rules. What they have though is their trash, and their trash is their treasure.
                            They’ll do whatever they can to get their little paws on it, even if it means befriending an
                            Academy of oafish Degenerate Apes.
                        </p>
                        <h1 className={styles.textCenter}>
                            WAGMI
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionScreen
