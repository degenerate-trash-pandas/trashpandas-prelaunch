import React, { useEffect, useRef } from "react";
import Parallax from 'parallax-js'

import styles from "./InitialScreen.module.css";

const InitialScreen = () => {
    const sceneRef = useRef(null)

    useEffect(() => {
        const parallax = new Parallax(sceneRef.current, {
            relativeInput: true,
            hoverOnly: true
        })
        parallax.enable();

        return () => parallax.disable()
    }, [])

    return (
        <div className={`screen-container ${styles.container}`}>
            <div className="top-icons">
                <img src="/assets/Logo.png"/>
                <img src="/assets/Bin_Open.png"/>
            </div>
            <div className={styles.mainContainer}>
                <div id={"trash-scene"} className={styles.trashScene} ref={sceneRef}>
                    <div data-depth={"0.40"}><img src="/assets/trash_scene/Boot.png" /></div>
                    <div data-depth={"0.50"}><img src="/assets/trash_scene/PirateHat.png" /></div>
                    <div data-depth={"0.60"}><img src="/assets/trash_scene/Box.png" /></div>
                    <div data-depth={"0.70"}><img src="/assets/trash_scene/chips.png" /></div>
                    <div data-depth={"0.80"}><img src="/assets/trash_scene/cone.png" /></div>
                    <div data-depth={"0.90"}><img src="/assets/trash_scene/soup.png" /></div>
                    <div data-depth={"1.00"}><img src="/assets/trash_scene/paperbag.png" /></div>
                    <div data-depth={"0.95"}><img src="/assets/trash_scene/crown.png" /></div>
                    <div data-depth={"0.85"}><img src="/assets/trash_scene/LampShade.png" /></div>
                    <div data-depth={"0.75"}><img src="/assets/trash_scene/plunger.png" /></div>
                    <div data-depth={"0.65"}><img src="/assets/trash_scene/pot.png" /></div>
                    <div data-depth={"0.55"}><img src="/assets/trash_scene/IceCream.png" /></div>
                    <div data-depth={"0.45"}><img src="/assets/trash_scene/noodles.png" /></div>
                </div>
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
