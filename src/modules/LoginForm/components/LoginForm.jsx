import React from 'react';
import {Button, Block} from 'components'
import { Form, Input, Checkbox, Spin, Result  } from 'antd';
import { MailOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

import { validateField } from "utils/helpers";

const LoginForm = props => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    const tryAgain = () => {
        props.setStatus(null);
        props.resetForm();
    }

    return (
        <>
            {
                props.user.isLoading ? (
                    <Spin size='large' indicator={<LoadingOutlined style={{ fontSize: 75 }} spin />} />
                ) : props.status && ( props.status.type === 403 || props.status.type === 404 ) ? (
                    <Block className=' small column'>
                        <Result
                            status="error"
                            title={props.status.message}
                            extra={
                            <Button type="primary" onClick={tryAgain}>
                                Try again
                            </Button>
                            }
                        />
                    </Block>
                ) : props.status && props.status.type === 200 ? (
                    <Block className=' small column'>
                        <Result
                            status="success"
                            title={`Hello, `}
                            extra={[
                            <Link to="/posts" key="home">
                                <Button type="primary" >
                                    Go Home
                                </Button>
                            </Link>,
                            <Link to="/user" key="login">
                                <Button type="primary" >
                                    Go to profile
                                </Button>
                            </Link>
                            ]}
                        />
                    </Block>
                ) : (
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
                                <Link to='/posts'> Начальная страница </Link>
                            </Button>
                        </Form>
                    </Block>
                )
            }
        
        
        </>
    )
}

export default LoginForm;