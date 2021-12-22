import React from "react";

import { Calendar } from 'antd';

const CalendarComponent = ({
  dateCellRender,
  monthCellRender,
  seletedDate
}) => {

	return (
		<div>
			<Calendar
				dateCellRender={dateCellRender}
				monthCellRender={monthCellRender}
        onSelect={seletedDate}
			/>
		</div>
	);
};

export default CalendarComponent;
