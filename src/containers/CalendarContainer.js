import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { Calendar, CalndarModal } from 'components';
import { Badge } from 'antd';
import { CalendarModal } from '../components';

const CalendarContainer = () => {
    const [ currentDate, setCurrentDate ] = useState('');
    const [ currentDateList, setCurrentDateList ] = useState( [{
        type: "warning", 
        content: "This is warning event."
    }] ); 
    const [ showModal, setShowModal ] = useState( false );

    function getListData(value) {
    
		let listData;
		switch (value) {
			case 8:
				listData = [
					{ type: "warning", content: "This is warning event." },
					{ type: "success", content: "This is usual event." },
				];
				break;
			case 10:
				listData = [
					{ type: "warning", content: "This is warning event." },
					{ type: "success", content: "This is usual event." },
					{ type: "error", content: "This is error event." },
				];
				break;
			case 15:
				listData = [
					{ type: "warning", content: "This is warning event" },
					{
						type: "success",
						content: "This is very long usual event。。....",
					},
					{ type: "error", content: "This is error event 1." },
					{ type: "error", content: "This is error event 2." },
					{ type: "error", content: "This is error event 3." },
					{ type: "error", content: "This is error event 4." },
				];
				break;
			default:
		}
		return listData || [];
	}

	function dateCellRender(value) {

		const listData = getListData(value.date());
		return (
			<ul className='events'>
				{listData.map((item) => (
					<li key={item.content}>
						<Badge status={item.type} text={item.content} />
					</li>
				))}
			</ul>
		);
	}

	function getMonthData(value) {
		if (value.month() === 8) {
			return 1394;
		}
	}

	function monthCellRender(value) {
		const num = getMonthData(value);
		return num ? (
			<div className='notes-month'>
				<section>{num}</section>
				<span>Backlog number</span>
			</div>
		) : null;
	}

    function seletedDate (date) {
        const listData = getListData(date.date());
        setShowModal( true )
        setCurrentDateList( listData );
    }

    function cancelModal() {
        setShowModal(false);
    }

    return (
        <>
            <Calendar 
                dateCellRender={dateCellRender} 
                monthCellRender={monthCellRender}
                seletedDate={seletedDate}
            />

            <div className={'currentDateModalontainer'}>
                <CalendarModal 
                    dataList={currentDateList}
                    isShown={showModal}
                    cancelModal={cancelModal}
                />
            </div>
        </>
    );
}

export default CalendarContainer;