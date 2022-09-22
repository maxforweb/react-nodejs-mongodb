import { Form, Input, Button } from "antd";
import React from "react";

import { validateField } from "utils/helpers";

import './ChangePasswordForm.scss';

const ChangePasswordForm = (props) => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;


    return(
        <Form 
            direction='vertical'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
        >
            <Form.Item 
                label="Old Password"
                validateStatus={validateField("oldPass", touched, errors)}
                help={ !touched.oldPass ? '' : errors.oldPass }
                hasFeedback
            >
                <Input.Password 
                    id = 'oldPass'
                    type="password"
                    size='default'
                    value={values.oldPass}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </Form.Item>
            <Form.Item 
                label="New Password"
                validateStatus={validateField("password", touched, errors)}
                help={ !touched.password ? '' : errors.password }
                hasFeedback
            >
                <Input.Password 
                    id = 'password'
                    type="password"
                    size='default'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </Form.Item>
            <Form.Item 
                label="Repeat New Password"
                validateStatus={validateField("repeatPassword", touched, errors)}
                help={ !touched.repeatPassword ? '' : errors.repeatPassword }
                hasFeedback
            >
                <Input.Password 
                    id = 'repeatPassword'
                    type="password"
                    size='default'
                    value={values.repeatPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 4, span: 16 }} >
                <Button type="primary" htmlType="submit" className="" onClick={handleSubmit}>
                    Save
                </Button>
            </Form.Item>
        </Form>
    )

}

export default ChangePasswordForm;