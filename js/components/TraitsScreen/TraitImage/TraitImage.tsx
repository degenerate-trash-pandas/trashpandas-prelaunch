import React from "react";
interface TraitSource {
    url?: string
    type?: string
    rarity?: string | undefined
    title?: string
}
const TraitImage = (props : TraitSource) => {
    return (
        <div>
            <img src={props.url} />
            <p>{props.title}</p>
        </div>
    )
}
export default TraitImage