import React, { useEffect, useRef } from "react";
import {useDispatch} from "react-redux";
import {addNewField} from "../store/actions/add";
import {Subject} from "rxjs";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
import {Form, Input, Button} from 'antd';
import { Manage } from "./manage";

type TFormSubject = { value: string; translate: string }

export const MainPage = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const valueSubject = useRef(new Subject<{ value: string; translate: string }>())

    useEffect(() => {
        valueSubject.current
            .pipe(
                debounceTime(500),
                distinctUntilChanged((prev, curr) => {
                    const isTranslateEqual = prev.translate === curr.translate
                    const isValueEqual = prev.value === curr.value
                    return Boolean(isTranslateEqual && isValueEqual)
                })
            )
            .subscribe(({value, translate}) => {
                dispatch(addNewField(value, translate))
            })
    }, [])

    const onFinish = (v: TFormSubject) => valueSubject.current.next(v);

    return <>
        <h1>Create new field!</h1>
        <Form
            layout={'vertical'}
            form={form}
            onFinish={onFinish}
        >
            <Form.Item label="Value" name="value">
                <Input placeholder='Please input your value!'/>
            </Form.Item>
            <Form.Item label="Translate value" name="translate">
                <Input placeholder='Please input your translate!'/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Add new case</Button>
            </Form.Item>
        </Form>
        <Manage/>
    </>
}
