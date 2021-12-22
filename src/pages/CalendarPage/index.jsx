import React from "react";
import { Header } from "modules";

import { CalendarContainer } from 'containers';

const CalendarPage = () => {
	return (
		<>
			<Header selectedKey={"5"} />
			<div className='container'>
				<div>CalendarPage</div>
        <CalendarContainer />
			</div>
		</>
	);
};

export default CalendarPage;
