import {ReactNode, useEffect} from "react";
import {useDispatch} from "react-redux";
import { initAction } from "../store/actions/init";

export const Wrapper = ({ children }: {children: ReactNode | ReactNode[]}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initAction)
    }, [])

    return <div>
        {children}
    </div>
}
