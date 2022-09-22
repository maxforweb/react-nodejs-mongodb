import React from "react";
import { Link } from 'react-router-dom';

import { Form, Input } from 'antd';
import {Button, Block} from 'components';
import { MailOutlined } from '@ant-design/icons';
import { validateField } from 'utils/helpers';

const ForgotPasswordEmailPartForm = props => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;

      return (
          <Block className = 'small column' >
            <h1>Восстановление пароля</h1>
            <p> Введите почту которая привязана к вашему аккаунту </p>
            <Form name="forgot_password_email" onSubmit={handleSubmit} >
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
                <Form.Item>
                    <Button type='primary' htmlType='submit' onClick={handleSubmit}>
                        Отправить
                    </Button>
                </Form.Item>
            </Form>    
          </Block>
      )
}

export default ForgotPasswordEmailPartForm;