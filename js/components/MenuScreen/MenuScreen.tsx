import styles from "./MenuScreen.module.css";
import React from "react";

const MenuScreen = (props: { fullPageRef: any }) => {
    const goToSlide = (slide: number) => {
        props.fullPageRef.current.scrollToSlide(slide)
        const menu = document.getElementById("magic-menu")
        menu?.classList.remove("active")
    }
    return (
        <div className={`screen-container ${styles.container}`}>
            <div className="top-icons-menu">
                <img src="/assets/Logo.png"/>
                <img src="/assets/Bin_Open.png"/>
            </div>
            <div className={`${styles.separator} ${styles.firstSeparator}`}>
            </div>
            <div className={`${styles.separator} ${styles.secondSeparator}`}>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.textContainer}>
                    <h3 onClick={() => goToSlide(0)}>
                        HOME
                    </h3>
                    <h3 onClick={() => goToSlide(1)}>
                        WAGMI
                    </h3>
                    <h3 onClick={() => goToSlide(2)}>
                        FRENS
                    </h3>
                    <h3 onClick={() => goToSlide(3)}>
                        THE GAME
                    </h3>
                    <h3 onClick={() => goToSlide(4)}>
                        LAUNCH
                    </h3>
                </div>
            </div>
            <img className={styles.character} src="/characters/TrashKing.png"/>
        </div>
    )
}

export default MenuScreen
