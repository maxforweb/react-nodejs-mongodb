import React from "react";
import { Header } from "modules";

import { CalendarContainer } from 'containers';

const CalendarPage = () => {
	return (
		<>
			<Header selectedKey={"4"} />
			<div className='container'>
				<div>CalendarPage</div>
        <CalendarContainer />
			</div>
		</>
	);
};

export default CalendarPage;
