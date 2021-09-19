import React, {ChangeEvent, useState, memo} from "react";

export const TrainView = memo(({value, handleClick, success}: any) => {
    const [translate, setTranslate] = useState('')

    return <div>
        {success && <div>success</div>}
        <h2>{value}</h2>
        <input value={translate} onInput={(e: ChangeEvent<HTMLInputElement>) => {
            setTranslate(e.target.value)
        }}/>
        <button onClick={() => handleClick(translate)}>complete</button>
    </div>
})
