import {FieldsView} from "../smart-components/fields-view";
import {
    ChangeEvent,
    useState,
    useEffect,
    useRef,
} from "react";
import {useDispatch} from "react-redux";
import {createAddFieldAction} from "../store/actions/add";
import {Subject} from "rxjs";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";

export const MainPage = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const valueSubject = useRef(new Subject<string>())

    useEffect(() => {
        valueSubject.current
            .pipe(
                debounceTime(500),
                distinctUntilChanged()
            )
            .subscribe((value) => {
                dispatch(createAddFieldAction(value))
            })
    }, [])

    return (<div>
        <div>Create new field</div>
        <input type="text" placeholder="input value" value={value}
               onInput={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}/>
        <input type="submit" onClick={() => {
            valueSubject.current.next(value)
        }}/>
        <FieldsView/>
    </div>)
}
