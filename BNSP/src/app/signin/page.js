'use client'

import { useRouter } from 'next/navigation';
import { Row, Col, Form, Button, Input, message } from 'antd';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function Signin() {
    //supabase auth
    const supabase = createClientComponentClient()

    //route for page movemenet
    const router = useRouter();

    //form data
    const [form] = Form.useForm();

    //calling message library
    const [messageApi, messageApiDisplay] = message.useMessage();

    const contentStyle = {
        height: '100vh',
        padding: 10,
        backgroundColor: '#fff',
    };

    //login process
    const onSubmit = async (input) => {
        //check login
        const { data, error } = await supabase.auth.signInWithPassword({
            email: input.email,
            password: input.password,
        })

        //if user not registered
        if (error) {
            messageApi.error(error.message, 1);

            //user not registered
        } else {
            messageApi.success('Berhasil Login', 1);
            router.push("menu/home")

        }
    }
    return (
        <Row>
            {messageApiDisplay}

            <Col span={9}></Col>
            <Col span={6}>
                <Form
                    name="signin"
                    layout="vertical"
                    onFinish={onSubmit}
                    form={form}

                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, type: 'email' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, min: 6 }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" block htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col span={9}></Col>

        </Row>
    )
}