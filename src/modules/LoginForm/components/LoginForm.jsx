import React, { Component } from 'react';
import {Button, Block} from 'components'
import { Form, Input, Checkbox  } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';


class LoginForm extends Component {
    render() {
        return (
            <Block className=' medium column'>
                <h1> Log In </h1>
                <p> Please log in into your account </p>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    
                    >
                    <Form.Item
                    name="username"
                    
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
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
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Link className="login-form-forgot" to="#">
                        Forgot password
                        </Link>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <Link to='/register'>register now!</Link>
                    </Form.Item>
                </Form>
            </Block>
        )
    }
}

export default LoginForm;