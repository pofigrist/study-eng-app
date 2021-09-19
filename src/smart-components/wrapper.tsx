import {ReactNode, useEffect} from "react";
import {useDispatch} from "react-redux";
import { initStore } from "../store/actions/init";

export const Wrapper = ({ children }: {children: ReactNode | ReactNode[]}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initStore())
    }, [])

    return <div>
        {children}
    </div>
}
