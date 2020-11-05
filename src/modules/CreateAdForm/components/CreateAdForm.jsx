import React from 'react';
import classNames from 'classnames';

import { Form, Input, Select  } from 'antd';
import { Button, Block } from 'components';
import { UserOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

import "./createAdForm.scss";
import { validateField } from "utils/helpers";

const CreateAdForm = props => {
    function onChange(value) {
        console.log(`selected ${value}`);
      }
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
      
    return (
        <Block className={classNames('medium', 'column', "createAdBlock")}>
            <Form name="nest-messages" onSubmit={handleSubmit}>
                <Form.Item  label="Name"
                validateStatus= {validateField("name", touched, errors)}  
                help={!touched.name ? '' : errors.name} 
                hasFeedback
                >
                    <Input
                    id='name'   
                    prefix={<UserOutlined className="site-form-item-icon" />} 
                    placeholder="Your name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />

                </Form.Item>
                <Form.Item  label="Email" 
                validateStatus= {validateField("email", touched, errors)}  
                help={!touched.email ? '' : errors.email} 
                hasFeedback

                >
                    <Input
                    id="email" 
                    prefix={<MailOutlined className="site-form-item-icon" />} 
                    placeholder="Your e-mail here" 
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />

                </Form.Item>
                <Form.Item  label="Phone"  
                validateStatus= {validateField("phone", touched, errors)}  
                help={!touched.phone ? '' : errors.phone}
                    hasFeedback

                >
                    <Input 
                    id="phone"
                    prefix={<PhoneOutlined className="site-form-item-icon" />} 
                    placeholder="Your phone number"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    />

                </Form.Item>
                <Form.Item  label="Adress"
                 validateStatus= {validateField("adress", touched, errors)}  
                 help={!touched.adress ? '' : errors.adress} 
                    hasFeedback

                >
                    <Input 
                    id="adress"
                    prefix={<EnvironmentOutlined className="site-form-item-icon" />} 
                    placeholder="Your adress here"
                    value={values.adress}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    />

                </Form.Item>
                <Form.Item  label="Area"
               
                    hasFeedback

                >
                    <Select
                    id='area'
                    placeholder="Choose an area here"
                    >
                        <Select.Option  value="first">First Option</Select.Option>
                        <Select.Option  value="second">Second Option</Select.Option>
                        <Select.Option value="third">Third Option</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item >
                    <Button type="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Block>
    )
}

export default CreateAdForm;