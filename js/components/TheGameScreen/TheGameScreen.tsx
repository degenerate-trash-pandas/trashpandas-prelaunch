import styles from "./TheGameScreen.module.css";
import React from "react";

const TheGameScreen = () => {
    return (
        <div className={`screen-container ${styles.container}`}>
            <div className={styles.mainContainer}>
                <div className={styles.coverImageContainer}>
                    <img className={styles.coverImage} src="/characters/GameImage.png" />
                </div>
                <div className={`${styles.textContainer} mobile-text-container`}>
                    <div className={styles.textPContainer}>
                        <h1 className={styles.textCenter}>
                            Lets scavenge
                        </h1>
                        <p>
                            ‘Trash with Frens’ is a first of its kind game on Solana, developed exclusively for Trash
                            Pandas and Degen Ape holders. It introduces the PANDA token as a medium of exchange within
                            the game.
                        </p>
                        <p>
                            Apes and Pandas will be able to scavenge on collectible map tiles for treasures that can be
                            used as items in later mini-games, as well as the PANDA token itself. In turn, they can use
                            their PANDA token to explore new tiles, and thereby collect them. Tiles will also contain
                            explorable buildings with higher quality treasures that will require a good combination of
                            Apes and Pandas to conquer and exploit, but watch out for enemies that may lurk within!
                            Holders will also be able to combine tiles across many wallets for highly efficient
                            scavenging and to collectively explore buildings that cross multiple tiles. These map tiles
                            will be completely configurable and will be generated from a creator UI where interested
                            builders can make their own map NFTs to sell.
                        </p>
                        <p>
                            TLDR: We’re going scavenging bois.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheGameScreen
