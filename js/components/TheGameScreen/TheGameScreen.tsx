import styles from "./TheGameScreen.module.css";

const TheGameScreen = () => {
    return (
        <div className={`screen-container ${styles.container}`}>
            <div className="top-icons">
                <img src="/assets/Logo.png"/>
                <img src="/assets/Bin_Open.png"/>
            </div>
            <div className={styles.mainContainer}>
                <img className={styles.coverImage} src={"/characters/Red_Panda.png"}/>
                <div className={styles.textContainer}>
                    <h3>The game</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar risus sed elementum
                        luctus.
                        Aenean sagittis nunc erat. Sed ac lacus a felis finibus mollis id sit amet felis. Curabitur
                        neque
                        nibh, aliquam in porttitor sit amet, convallis non ipsum. Nulla metus elit, egestas nec ligula
                        eu,
                        pharetra egestas ante.
                    </p>
                    <p>
                        Maecenas hendrerit risus vitae lectus hendrerit, at blandit erat dapibus. Vivamus lobortis
                        efficitur
                        ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi libero metus,
                        ullamcorper id ultrices vel, tempus sit amet metus. Aliquam mattis ligula vel consequat commodo.
                        Nam
                        eu odio turpis.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default TheGameScreen
