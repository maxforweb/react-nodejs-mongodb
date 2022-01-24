import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { connect } from 'react-redux';

import { Calendar, CalendarModal } from 'components';
import { calendarNotesActions } from '../redux/actions';

import { Badge } from 'antd';

const CalendarContainer = ({
	getAllNotes,
	deleteNote,
	notes
}) => {
	const [ currentDate, setCurrentDate ] = useState('');
	const [ calendarMode, setCalendarMode ] = useState('month');
    const [ currentDateList, setCurrentDateList ] = useState( [] ); 
    const [ showModal, setShowModal ] = useState( false );
	const [ editNote, setEditNote ]= useState( { edit: false, id: '' } );
	const [ addNote, setAddNote ] = useState(false);

	useEffect ( () => {
		if ( !notes.length ) {
			getAllNotes();
		}
	}, [notes]);

    const getListData = (value) => {
		let listData = [];
		if ( notes.length ) {
			notes.forEach(note => {
				if ( note.date ===  value ) {
					listData.push({
						id: note._id,
						type: note.type,
						content: note.content,
						date: note.date
					})
				}
			})
		} 
		return listData || [];
	};

	const dateCellRender =  (value) => {
		
		const listData = getListData(value.format("MM.DD.Y"));
		return (
			<ul className='events'>
				{listData.map((item) => (
					<li key={item.id}>
						<Badge status={item.type} text={item.content} />
					</li>
				))}
			</ul>
		);
	};

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

    function seletedDate (value) {
		
		if ( calendarMode != 'year' ) {
			const listData = getListData(value.format("MM.DD.Y"));
			setShowModal( true )
			setCurrentDateList( listData );
			setCurrentDate( value.format("MM.DD.Y") );
		}
        
    }

	function panelChange (val, mode) {
		if ( calendarMode != mode ){
			setCalendarMode(mode);
		}
	}

    function cancelModal() {
        setShowModal(false);
		setEditNote(false);
    }

	function deleteThisNote() {
		deleteNote(this.id);
		setCurrentDateList(currentDateList.filter( val => val.id != this.id ));
	}

	function editNoteFunc () {
		setEditNote( prev => ({
			...prev,
			edit: !prev.edit,
			id: this.id ? this.id : ''
		} ));
		if ( !this.id ) {
			setAddNote(false);
		}
	}

	function updateNoteList (note) {
		
		if ( currentDateList.length ) {
			if ( note.id ) {
				setCurrentDateList( currentDateList.map( item => {
					if ( item.id === note.id ) {
						item.type = note.type;
						item.content = note.content;
					}
					return item;
				}))
			} else {
				const newNotes = [];
				newNotes.push(note);
				const data = currentDateList.concat(newNotes);
				setCurrentDateList(data)
			}
			
		} else {
			const newNotes = [];
			newNotes.push(note)
			setCurrentDateList(newNotes);
		}
	}

	function addNoteFunc () {
		setAddNote(true);
	}

    return (
        <>
            <Calendar 
                dateCellRender={dateCellRender} 
                monthCellRender={monthCellRender}
                seletedDate={seletedDate}
				panelChange={panelChange}
            />

            <div className={'currentDateModalontainer'}>
                <CalendarModal 
                    dataList={currentDateList}
                    isShown={showModal}
                    cancelModal={cancelModal}
					deleteNote={deleteThisNote}
					date={currentDate}
					editNote={editNote}
					editNoteFunc={editNoteFunc}
					updateNoteList={updateNoteList}
					addNoteFunc={addNoteFunc}
					addNote={addNote}
                />
            </div>
        </>
    );
}

export default connect(
	({ calendarNotes }) => calendarNotes,
	calendarNotesActions
)(CalendarContainer);