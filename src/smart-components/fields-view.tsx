import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../store/reducers";

export const FieldsView = () => {
    const dispatch = useDispatch()
    const fields = useSelector((state: IStore) => state.main.fields)

    return <div>
        <ul>
            {fields.map(
                ({value, id}) => <li key={id}>
                    {value}
                    <button onClick={() => dispatch({
                        type: 'DEL',
                        payload: { id }
                    })}>remove</button>
                </li>)
            }
        </ul>
    </div>
}
