import React from 'react';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined  } from '@ant-design/icons';
import {Link} from 'react-router-dom';

import {Button, Block} from 'components'


const RegisterForm = props => {
    
    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        dirty,
      } = props;
    return (
        <Block className=' medium column'>
            <h1> Register </h1>
            <p> Create a new acount </p>
            <Form name="normal_login" className="login-form" initialValues={{  remember: true, }} onSubmit={handleSubmit} >
                <Form.Item
                hasFeedback
                name="name"
                rules={[
                {
                    required: true,
                    message: 'Please input your name',
                },
                ]}
                >
                    <Input value="name" prefix={<UserOutlined className="site-form-item-icon" />} size='large' 
                    placeholder="Name"  />
                </Form.Item>
                <Form.Item
                hasFeedback
                name="email"
                rules={[
                {
                    required: true,
                    message: 'Please input your Email',
                },
                ]}
                >
                    <Input 
                    id='email'
                    prefix={<MailOutlined className="site-form-item-icon" />}  
                    size='large' 
                    placeholder="Email"  
                    value={values.email}
                    />
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

export default RegisterForm;