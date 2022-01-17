import React from 'react';
import classNames from 'classnames';

import { CalendarNoteForm } from 'modules';
import { Modal, Badge, Empty, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import './calendarModal.scss'


const CalendarModal = ({
    dataList,
    isShown,
    cancelModal,
    deleteNote,
    date,
    editNote, 
    editNoteFunc,
    updateNoteList,
    addNoteFunc,
    addNote
}) => {

    return (
        <Modal
            title={'Notes for  ' + date}
            visible={isShown}
            onCancel={ cancelModal }
            footer={[
                <Button key="close" onClick={cancelModal} >
                    Back
                </Button>,
                <Button key="add" type="primary" onClick={addNoteFunc}>
                    Add note
                </Button>
            ]}
        >
            <ul className='events claendar_notes'>
				{ 
                    dataList.length ? 
                    dataList.map((item, key) => (
                        
                        <li key={item.id ? item.id : key } className={ classNames( 'd-flex justify-content-between claendar_note', editNote.edit && editNote.id === item.id ? 'show_input' : '' )}>
                            {
                                editNote.edit && editNote.id === item.id ? (
                                <CalendarNoteForm 
                                    item={item}
                                    closeEdittitng={editNoteFunc}
                                    updateNoteList={updateNoteList}
                                    date={date}
                                />) : <Badge className={'claendar_note--current_note'} status={item.type} text={item.content} />

                            }
                            
                            <div className={'buttons calnedar_modal--ation_buttons'}>
                                <EditOutlined className={'edit_button'} style={{ fontSize: '16px', color: '#C7983C' }}  onClick={editNoteFunc.bind(item)}/>
                                <DeleteOutlined className='delete_button' style={{ fontSize: '16px', color: '#A71616' }} onClick={deleteNote.bind(item)}/>
                            </div>
                        </li>

				    )) : !addNote ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="On this date you have no plans" />   :
                    ''
                }
                {
                addNote ? (
                    <li className={'d-flex justify-content-between claendar_note show_input'}>
                        <CalendarNoteForm
                            closeEdittitng={editNoteFunc}
                            updateNoteList={updateNoteList}
                            date={date}
                        />
                    </li>   
                ) : ''
            }
			</ul>
            
        </Modal>
    )
}

export default CalendarModal;