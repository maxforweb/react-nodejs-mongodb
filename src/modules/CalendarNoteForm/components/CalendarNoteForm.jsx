import React from 'react';
import classNames from 'classnames';

import './CalendarNoteForm.scss';

import {Select, Input, Badge, Form} from 'antd'; 
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
const { Option } = Select;
import { validateField } from "utils/helpers";


const CalendarNoteForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    const handleSelectChange = ( val ) => {
        props.setFieldValue('type', val);
    }
    return(
        <>
            <div className="claendar_note--edit_note_inputs">
                <Form name='edit_note' className="edit_note_form" onSubmit={handleSubmit} >
                    <Form.Item 
                        
                    >
                        <Select 
                            id="type"
                            name="type"
                            value={values.type}
                            style={{ width: 150 }}                             
                            onChange={handleSelectChange}
                            onBlur={handleBlur}
                        >
                            <Option value="success"><Badge status={'success'} /> Default </Option>
                            <Option value="warning"><Badge status={'warning'} /> Warning</Option>
                            <Option value="error"><Badge status={'error'} />  Error</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item 
                        validateStatus= {validateField("content", touched, errors)}
                        help={!touched.content ? '' : errors.content}
                        hasFeedback
                    >
                        <Input 
                            id="content"
                            className='claendar_note--edit_note_input' 
                            placeholder="Note description" 
                            value={values.content} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                </Form>
            </div>
            <div className={'buttons calnedar_modal--ation_buttons'}>
                <CheckCircleOutlined className={'save_button'} style={{ fontSize: '16px', color: '#52c41a' }} onClick={handleSubmit}/>
                <CloseCircleOutlined className={'close_edit'} style={{ fontSize: '16px', color: '#A71616' }}  onClick={props.closeEdittitng.bind(props.item)}/>
            </div>
        </>
    )
}

export default CalendarNoteForm;