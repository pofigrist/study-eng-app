import React, {memo} from "react";
import {Form, Input, Button} from 'antd'

export const TrainView = memo(({value, handleCompare, success, handleNext}: any) => {
    const [form] = Form.useForm();
    const onFinish = ({ translate }: any) => {
        if (success) {
            handleNext()
            form.resetFields()
        } else {
            handleCompare(translate)
        }
    };

    return (<>
         <h2>{value}</h2>
        <Form
            form={form}
            name="basic"
            onFinish={onFinish}
            layout="vertical"
        >
            <Form.Item
                label="Translate"
                name="translate"
                rules={[
                    {
                        required: true,
                        message: 'Please input your translate!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit"  shape={success && 'round'}>
                    {success ? 'Next' : 'Check translate'}
                </Button>
            </Form.Item>
        </Form>
        </>
    );
})
