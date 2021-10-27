import styles from "./MenuScreen.module.css";
import React from "react";

const MenuScreen = (props : {fullPageRef : any}) => {
    console.log(props.fullPageRef)
    const goToSlide = (slide : number) => {
        props.fullPageRef.current.scrollToSlide(slide)
    }
    return (
        <div className={`screen-container ${styles.container}`}>

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
                    <h3 onClick={() => goToSlide(3)}>
                        FRENS
                    </h3>
                    <h3 onClick={() => goToSlide(4)}>
                        THE GAME
                    </h3>
                    <h3 onClick={() => goToSlide(5)}>
                        LAUNCH
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default MenuScreen
