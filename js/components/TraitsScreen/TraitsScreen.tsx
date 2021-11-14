import React, { useMemo, useState } from "react";
import styles from "./TraitsScreen.module.css";
import Masonry from "react-masonry-css";
import { RARITY_ORDER, TRAITS_DATA } from "../../constans";
import {TraitImage, TraitSource} from "./TraitImage/TraitImage";

const TraitsScreen = () => {
    const [type, setType] = useState("All")
    const [rarity, setRarity] = useState<string[]>(["All"])
    const sortFunc = (a:any, b:any) => RARITY_ORDER.indexOf(a.rarity) - RARITY_ORDER.indexOf(b.rarity)
    const fur = TRAITS_DATA.filter(el => el.type === "Fur").sort(sortFunc)
    const head = TRAITS_DATA.filter(el => el.type === "Head").sort(sortFunc)
    const body = TRAITS_DATA.filter(el => el.type === "Body").sort(sortFunc)
    const glasses = TRAITS_DATA.filter(el => el.type === "Glasses").sort(sortFunc)
    const mouth = TRAITS_DATA.filter(el => el.type === "Mouth").sort(sortFunc)
    const bg = TRAITS_DATA.filter(el => el.type === "Background").sort(sortFunc)
    const sortedTraits: TraitSource[] = [...fur, ...head, ...body, ...glasses, ...mouth, ...bg]

    const filteredTraits = useMemo(() => {
        let traits = sortedTraits;
        if (type != "All") {
            switch (type) {
                case "Fur":
                    traits = [...fur]
                    break
                case "Head":
                    traits = [...head]
                    break
                case "Body":
                    traits = [...body]
                    break
                case "Glasses":
                    traits = [...glasses]
                    break
                case "Mouth":
                    traits = [...mouth]
                    break
                case "Background":
                    traits = [...bg]
                    break
            }
        }
        if (rarity.length > 0 && !rarity.includes("All")) {
            traits = traits.filter(e => e.rarity && rarity.includes(e.rarity))
        }
        return traits
    }, [type, rarity])
    return (
        <div className={`screen-container ${styles.container}`}>
            <div className={styles.leftContainer}>
                <div className={styles.title}>
                    <img src={"/assets/Title.png"}/>
                </div>
                <div className={styles.menuContainer}>
                    <div className={styles.selectContainer}>
                        <select value={type} onChange={(e) => setType(e.target.value)} className={styles.select}>
                            <option>All</option>
                            <option>Fur</option>
                            <option>Head</option>
                            <option>Body</option>
                            <option>Glasses</option>
                            <option>Mouth</option>
                            <option>Background</option>
                        </select>
                    </div>
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
                        764: 2,
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
