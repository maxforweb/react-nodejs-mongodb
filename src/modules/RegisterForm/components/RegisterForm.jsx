import React from 'react';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined  } from '@ant-design/icons';
import {Link} from 'react-router-dom';

import {Button, Block} from 'components';
import { validateField } from "utils/helpers";

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
            <h1> Регистрация  </h1>
            <p> Создайте новый аккаунт </p>
            <Form name="normal_login" className="login-form" onSubmit={handleSubmit} >
                <Form.Item
                validateStatus= {validateField("name", touched, errors)}  
                help={!touched.name ? '' : errors.name}
                hasFeedback
                >
                    <Input
                        id='name'
                        prefix={<UserOutlined className="site-form-item-icon" />} 
                        size='large' 
                        placeholder="Name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                    />
                </Form.Item>

                <Form.Item
                validateStatus= {validateField("email", touched, errors)}  
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
                validateStatus={validateField("password", touched, errors)}
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
                validateStatus={validateField("repeatPassword", touched, errors)}
                help={ !touched.repeatPassword ? '' : errors.repeatPassword }
                hasFeedback
                >
                    <Input
                    id="repeatPassword"
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Repeat password"
                    size='large'
                    value={values.repeatPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </Form.Item>
                
                <Form.Item>
                    <Button type="primary" className="login-form-button" onClick={handleSubmit}>
                        Создать новый аккаунт 
                    </Button>
                    Or <Link to='/login'>Log in</Link>
                </Form.Item>
            </Form>
        </Block>
    )
}

export default RegisterForm;