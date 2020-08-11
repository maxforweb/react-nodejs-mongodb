import React from 'react';
import {Button, Block} from 'components'
import { Form, Input, Checkbox  } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

const LoginForm = props => {

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
            <h1> Войти </h1>
            <p> Пожалуйста войдите в свой аккаунт </p>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                
                >
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
                    id = 'password'
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    size='large'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleSubmit}>
                        Войти
                    </Button>
                    Or <Link to='/register'>register now!</Link>
                </Form.Item>
                <Button type='primary' className='Login-form-button'>
                    <Link to='/home'> Начальная страница </Link>
                </Button>
            </Form>
        </Block>
    )
}

export default LoginForm;