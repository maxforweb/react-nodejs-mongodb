import React from "react";
import { Form, Input, Result } from 'antd';

import {Button, Block} from 'components';
import { validateField } from "utils/helpers";

import './editUserForm.scss'
import { Link } from "react-router-dom";

const EditUserForm = ( props ) => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;

    return (
        <div className={'edit_user_form'} >
            {
                !props.status ? (
                    <Form 
                        className={'edit_user_form--form'}
                        layout="vertical"
                    >
                        <Form.Item 
                            validateStatus= {validateField("email", touched, errors)}  
                            help={!touched.email ? '' : errors.email}
                            hasFeedback
                            label={'Email'}
                        >
                            <Input 
                                id="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item 
                            validateStatus= {validateField("phone", touched, errors)}  
                            help={!touched.phone ? '' : errors.phone}
                            hasFeedback
                            label={'Phone'}
                        >
                            <Input 
                                id="phone"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item 
                            validateStatus= {validateField("name", touched, errors)}  
                            help={!touched.name ? '' : errors.name}
                            hasFeedback
                            label={'Name'}
                        >
                            <Input 
                                id="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item 
                            validateStatus= {validateField("lastName", touched, errors)}  
                            help={!touched.lastName ? '' : errors.lastName}
                            hasFeedback
                            label={'Last Name'}
                        >
                            <Input 
                                id="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" className="login-form-button" onClick={handleSubmit}>
                                Save changes
                            </Button>
                        </Form.Item>
                    </Form>
                ) : props.status && props.status.type === 200 ? (
                    <Block className=' small column'>
                        <Result
                            status="success"
                            title={props.status.message}
                            extra={
                                <Link to={'/user'}>
                                    <Button type="primary" >
                                        Go Back
                                    </Button>
                                </Link>
                            }
                        />
                    </Block>
                ) : (
                    <Block className=' small column'>
                        <Result
                            status="error"
                            title={props.status.message}
                            extra={
                            <Button type="primary" >
                                Go Back
                            </Button>
                            }
                        />
                    </Block>
                )
            }
            
        </div>
    )
}

export default EditUserForm;