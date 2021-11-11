import React, { useMemo, useState } from "react";
import styles from "./TraitsScreen.module.css";
import Masonry from "react-masonry-css";
import { RARITY_ORDER, TRAITS_DATA } from "../../constans";
import {TraitImage, TraitSource} from "./TraitImage/TraitImage";

const TraitsScreen = () => {
    const [type, setType] = useState("All")
    const [rarity, setRarity] = useState<string[]>(["All"])
    let sortedTraits: TraitSource[] = []
    RARITY_ORDER.map(e => {
        sortedTraits = sortedTraits.concat(TRAITS_DATA.filter(trait => trait.rarity === e))
    })
    const filteredTraits = useMemo(() => {
        let traits = sortedTraits;
        if (type != "All") {
            traits = traits.filter(e => e.type === type)
        }
        if (rarity.length > 0 && !rarity.includes("All")) {
            traits = traits.filter(e => e.rarity && rarity.includes(e.rarity))
        }
        return traits
    }, [type, rarity])
    return (
        <div className={`screen-container ${styles.container}`}>
            <div className={styles.leftContainer}>
                <h1 className={styles.title}>Traits</h1>
                <h3 className={styles.subtitle}>& rarity</h3>
                <div className={styles.menuContainer}>
                    <select value={type} onChange={(e) => setType(e.target.value)} className={styles.select}>
                        <option>All</option>
                        <option>Head</option>
                        <option>Clothing</option>
                        <option>Mouth</option>
                        <option>Fur</option>
                        <option>Background</option>
                    </select>
                    <div className={styles.checkboxContainer}>
                        {["All", "Common", "Uncommon", "Rare", "Super rare", "Mythic"].map((e, idx) => (
                            <div className={styles.checkboxItem} key={idx}>
                                <input
                                    type="checkbox"
                                    name="fruit"
                                    value={e}
                                    checked={rarity.includes(e)}
                                    onChange={() => {
                                        if (e == "All") {
                                            console.log(rarity)
                                            setRarity(["All"])
                                        } else {
                                            let newRarity = [...rarity]
                                            if (newRarity.includes(e)) {
                                                newRarity = newRarity.filter(rarity => rarity != e)
                                            } else {
                                                newRarity.push(e)
                                            }
                                            newRarity = newRarity.filter(rarity => rarity != "All")
                                            setRarity(newRarity)
                                        }

                                    }}
                                    className={styles.checkbox}
                                /> <label className={styles.checkboxLabel}>{e}</label>
                            </div>
                        ))}
                    </div>
                    <div className={styles.checkboxMobileContainer}>
                        <select value={rarity[0]} onChange={(e) => setRarity([e.target.value])}
                                className={styles.select}>
                            {["All", "Common", "Uncommon", "Rare", "Super rare", "Mythic"].map((e, idx) => (
                                <option key={idx}>{e}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <Masonry
                    breakpointCols={{
                        default: 3,
                        1100: 3,
                        700: 2,
                        500: 2
                    }}
                    className={styles.myMasonryGrid}
                    columnClassName={styles.myMasonryGridColumn}
                >
                    {filteredTraits.map((e, idx) => <TraitImage key={idx} title={e.title} url={e.url} rarity={e.rarity}
                                                                type={e.type} />)}
                </Masonry>
            </div>
        </div>
    )
}

export default TraitsScreen
