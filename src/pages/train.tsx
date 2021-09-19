import {useSelector} from "react-redux";
import {IField, IStore} from "../store/reducers";
import {FieldsView} from "../smart-components/fields-view";
import React, {useCallback, useEffect, useState} from "react";
import {TrainView} from "../smart-components/train-view";

export const TrainPage = () => {
    const [field, setField] = useState<IField>()
    const [success, setSuccess] = useState(false)
    const fields = useSelector((state: IStore) => state.main.fields)

    useEffect(() => {
        if (fields.length) {
            setField(fields[Math.floor(Math.random() * fields.length)])
            setSuccess(false)
        }
    }, [fields])

    const compareValues = useCallback((val: string) => {
        if (val === field?.translate) {
            return setSuccess(true)
        }
        return setSuccess(false)
    }, [field])

    const handleNext = useCallback(() => {
        setField(fields[Math.floor(Math.random() * fields.length)])
        setSuccess(false)
    }, [])

    return (<div>
        {field && <TrainView {...field} handleClick={compareValues} success={success}/>}
        <button disabled={!success} onClick={handleNext}>next</button>
        <FieldsView/>
    </div>)
}
