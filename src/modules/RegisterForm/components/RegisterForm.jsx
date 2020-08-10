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
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;

    return (
        <Block className=' medium column'>
            <h1> Register </h1>
            <p> Create a new acount </p>
            <Form name="normal_login" className="login-form" onSubmit={handleSubmit} >
                <Form.Item
                hasFeedback
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} size='large' 
                    placeholder="Name"  />
                </Form.Item>

                <Form.Item
                validateStatus={ !touched.email ? '': errors.email  ? 'error' : 'success' }
                help={!touched.email ? '' : errors.email}
                hasFeedback
                >
                    <Input 
                    id='email'
                    prefix={<MailOutlined className="site-form-item-icon" />}  
                    size='large' 
                    placeholder="Email"  
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </Form.Item>

                <Form.Item
                validateStatus={ !touched.password ? '' : errors.password  ? 'error' : 'success' }
                help={ !touched.password ? '' : errors.password }
                hasFeedback
                >
                    <Input
                    id='password'
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    size='large'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </Form.Item>

                <Form.Item
                validateStatus={ !touched.password ? '' : errors.password  ? 'error' : 'success' }
                hasFeedback
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Repeat password"
                    size='large'
                    />
                </Form.Item>
                
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleSubmit}>
                        Create new account
                    </Button>
                    Or <Link to='/login'>Log in</Link>
                </Form.Item>
            </Form>
        </Block>
    )
}

export default RegisterForm;