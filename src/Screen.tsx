import React from "react";

type ScreenType = {
    count: number
}

export const Screen:  React.FC<ScreenType> = ({count}) => {

    return (
        <div className={`screen ${count==5? 'red' : ''}`}>
            {count}
        </div>
    )
}