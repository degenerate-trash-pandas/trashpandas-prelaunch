import React from "react";

export interface TraitSource {
    url?: string
    type?: string
    rarity?: string | undefined
    title: string
}

export const TraitImage = (props: TraitSource) => {
    return (
        <div>
            <img src={props.url} />
            <p className={"capitalize"}>{props.title}</p>
        </div>
    )
}