import React, { Component } from 'react';
import {Button, Block} from 'components'
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';


class RegisterForm extends Component {
    render() {
        return (
            <Block className=' medium column'>
                <h1> Register </h1>
                <p> Create a new acount </p>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    
                    >
                    <Form.Item
                    name="name"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your name',
                    },
                    ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} size='large' 
                        placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                    name="Username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Username',
                    },
                    ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} size='large' 
                        placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        ]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        size='large'
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Create new account
                        </Button>
                        Or <Link to='/login'>Log in</Link>
                    </Form.Item>
                </Form>
            </Block>
        )
    }
}

export default RegisterForm;