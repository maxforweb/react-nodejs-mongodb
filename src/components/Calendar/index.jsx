import React from "react";

import { Calendar } from 'antd';

const CalendarComponent = ({
  dateCellRender,
  monthCellRender,
  seletedDate,
  panelChange
}) => {

	return (
		<div>
			<Calendar
				dateCellRender={dateCellRender}
				monthCellRender={monthCellRender}
        		onSelect={seletedDate}
				onPanelChange={panelChange}
			/>
		</div>
	);
};

export default CalendarComponent;
