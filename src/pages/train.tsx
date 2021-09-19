import {useSelector} from "react-redux";
import {IField, IStore} from "../store/reducers";
import React, {useCallback, useEffect, useState} from "react";
import {TrainView} from "../smart-components/train-view";
import {Comments} from "../smart-components/Comments";
import {Manage} from "./manage";

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

    const handleCompare = useCallback((val: string) => {
        if (val === field?.translate) {
            return setSuccess(true)
        }
        console.log(field)

        return setSuccess(false)
    }, [field])

    const handleNext = useCallback(() => {
        setField(fields[Math.floor(Math.random() * fields.length)])
        setSuccess(false)
    }, [fields])

    return (<div>
        {field && <TrainView {...field} handleCompare={handleCompare} success={success} handleNext={handleNext}/>}
        {field && success && <Comments data={field.comments}/>}
        <Manage/>
    </div>)
}
