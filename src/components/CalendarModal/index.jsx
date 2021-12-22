import React from 'react';

import { Modal, Badge, Empty } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import './calendarModal.scss'
 
const CalendarModal = ({
    dataList,
    isShown,
    cancelModal
}) => {
    
    return (
        <Modal
            title={'Chosen date info'}
            visible={isShown}
            onCancel={ cancelModal }
            footer={null}
        >
            <ul className='events'>
				{ 
                    dataList.length ? 
                    dataList.map((item) => (
                        <li key={item.content} className={'d-flex justify-content-between'}>
                            <Badge status={item.type} text={item.content} />
                            <div className={'buttons calnedar_modal--ation_buttons'}>
                                <EditOutlined style={{ fontSize: '16px', color: '#C7983C' }}  />
                                <DeleteOutlined style={{ fontSize: '16px', color: '#A71616' }} />
                            </div>
                        </li>
				    )) :
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="On this date you have no plans" />  
                }
			</ul>
        </Modal>
    )
}

export default CalendarModal;