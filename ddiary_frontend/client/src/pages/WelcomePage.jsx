import React, { useState } from 'react';
import './welcomepage.css';

import {
	
	DiaryEntry,
	// Statistics
	Ptsd,
	Ptsd_symptoms,
	Safe_space,
	Slow_movement,
	Grief_journal
} from "../components";
import MainSidebar from '../components/navbar/MainSidebar';
import { useLocation } from 'react-router-dom';

const WelcomePage = () => {
	
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
  	const selectedValue = queryParams.get('template') || '';
    

	const renderSelectedComponent = () => {
		switch (selectedValue) {
			case 'Ptsd':
				return <Ptsd />;
			case 'Ptsd_symptoms':
				return <Ptsd_symptoms />;
			case 'Safe_space':
				return <Safe_space />;
			case 'Slow_movement':
				return <Slow_movement />;
			case 'Grief_journal':
				return <Grief_journal />;
			case 'diary':
				return <DiaryEntry />;
			default:
				return <DiaryEntry />;
		}
	};

	return (
		<div className="soul-voyger_welcome-page" id="welcome-page">
			<div className="column  d-flex flex-grow-1">
				{/*<h1>Selected Value: {selectedValue}</h1>*/}
				{/* <Sidebar onDropdownChange={handleDropdownChange} selectedValue={selectedValue} className="sidebar-welcome-page"/>
				{renderSelectedComponent()} */}
				{/*<Slow_movement className="diaryentry-welcome-page"/>*/}
				{/*<DiaryEntry className="diaryentry-welcome-page"/>*/}

				{/* <Statistics /> */}
				<MainSidebar />
				<div className="content">
					{renderSelectedComponent()} {/* Render selected component */}
				</div>
				
			</div>
		</div>
	);
};

export default WelcomePage;