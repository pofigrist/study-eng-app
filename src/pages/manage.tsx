import {useDispatch, useSelector} from "react-redux";
import {IField, IStore} from "../store/reducers";
import { Table } from 'antd';
import {useMemo} from "react";
import { Button } from 'antd';

export const Manage = () => {
    const dispatch = useDispatch()
    const fields = useSelector((state: IStore) => state.main.fields)

    const columns = useMemo(() => {
        return [{
            title: 'ID',
            width: 100,
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
        },{
            title: 'Value',
            width: 100,
            dataIndex: 'value',
            key: 'value',
            fixed: 'left',
        },{
            title: 'Translate',
            width: 100,
            dataIndex: 'translate',
            key: 'translate',
            fixed: 'left',
        },{
            title: 'Remove button',
            width: 100,
            key: 'operation',
            fixed: 'left',
            render: ({ id }: IField) => {
                return <Button danger onClick={() => dispatch({
                    type: 'DEL',
                    payload: { id }
                })}>Remove</Button>},
        }]
    }, [fields])
    // @ts-ignore
    return <Table columns={columns} dataSource={fields} scroll={{ x: 1300 }} />
    return <div>Manage</div>
}
