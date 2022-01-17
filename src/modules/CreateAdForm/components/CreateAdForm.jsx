import React from 'react';
import classNames from 'classnames';

import { Form, Input, Select  } from 'antd';
import { Button, Block } from 'components';

import "./createAdForm.scss";
import { validateField } from "utils/helpers";

const CreateAdForm = props => {
    
    
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    const isAuth = props.isAuth;

    const selectChange = (val) => {
        props.setFieldValue('area', val);
    }
      
    return (
        <>
            {
                isAuth ? (
                    <Block className={classNames('medium', 'column', "createAdBlock")}>
                        <Form name="nest-messages" onSubmit={handleSubmit}>
                            <Form.Item  
                                label="Title"
                                validateStatus= {validateField("title", touched, errors)}  
                                help={!touched.title ? '' : errors.title} 
                                hasFeedback
                            >
                                <Input
                                id='title'
                                placeholder="Title"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />

                            </Form.Item>
                            <Form.Item  
                                
                                label="Description" 
                                validateStatus= {validateField("description", touched, errors)}  
                                help={!touched.description ? '' : errors.description} 
                                hasFeedback

                            >
                                <Input
                                    id='description'
                                    placeholder="Description" 
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                            </Form.Item>
                            <Form.Item  
                                label="Price"  
                                validateStatus= {validateField("price", touched, errors)}  
                                help={!touched.price ? '' : errors.price}
                                hasFeedback

                            >
                                <Input 
                                    id="price"
                                    placeholder="Price"
                                    value={values.price}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                />

                            </Form.Item>
                            <Form.Item  
                                label="Adress"
                                validateStatus= {validateField("adress", touched, errors)}  
                                help={!touched.adress ? '' : errors.adress} 
                                hasFeedback
                            >
                                <Input 
                                    id="adress" 
                                    placeholder="Your adress here"
                                    value={values.adress}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                />

                            </Form.Item>
                            <Form.Item  
                                label="Area"
                                hasFeedback
                            >
                                <Select
                                    id='area'
                                    placeholder="Choose an area here"
                                    onChange={selectChange}
                                    value={values.area}
                                    defaultValue={'first'}

                                >
                                    <Select.Option  value="first">First Option</Select.Option>
                                    <Select.Option  value="second">Second Option</Select.Option>
                                    <Select.Option  value="third">Third Option</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item >
                                <Button type="primary" onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Block>
                ) : (
                    <p>Auth first</p>
                )
            }

        </>
    )
}

export default CreateAdForm;