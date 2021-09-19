import React, {
    ChangeEvent,
    useState,
    useEffect,
    useRef,
} from "react";
import {useDispatch} from "react-redux";
import {createAddFieldAction} from "../store/actions/add";
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {TrainPage} from "./train";

export const MainPage = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [translate, setTranslate] = useState('')
    const valueSubject = useRef(new Subject<{ value: string; translate: string}>())

    useEffect(() => {
        valueSubject.current
            .pipe(
                debounceTime(500)
            )
            .subscribe(({value, translate}) => {
                dispatch(createAddFieldAction(value, translate))
            })
    }, [])

    return (<div>
        <div>Create new field</div>
        <input type="text" placeholder="value" value={value}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}/>

        <input type="text" placeholder="translate" value={translate}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setTranslate(e.target.value)}/>

        <button onClick={() => {
            valueSubject.current.next({value, translate})
        }}>submit</button>
        <TrainPage/>
    </div>)
}
