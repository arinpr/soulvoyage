import React, { useState } from 'react';
import './welcomepage.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
import { useLocation, useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const darkTheme = createTheme({
    palette: {
      mode: 'light', 
      primary: {
        main: '#000000',
      },
    },
  });
const WelcomePage = () => {
	const navigate = useNavigate();
	const [selectedValue, setSelectedValue] = useState(localStorage.getItem('selectedTemplate') || '');
    
	  const handleDropdownChange = (event) => {
		event.preventDefault();
		const value = event.target.value;
		setSelectedValue(value);
		localStorage.setItem('selectedTemplate', value);
		navigate(`/welcome-page?template=${value}`);
	  };

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
				<div className='w-50 w-sm-75 px-4'>
                <ThemeProvider theme={darkTheme}>
                  <FormControl fullWidth>
                    <InputLabel id="select-label" className="">Select Template</InputLabel>
                    <Select
                      labelId="select-label"
                      id="select"
                      className=" w-100"
                      
                      value={selectedValue}
                      label="Select Template"
                      onChange={handleDropdownChange}
                    >
                      <MenuItem value="diary">Template</MenuItem>
                      <MenuItem value="Safe_space">Safe Space</MenuItem>
                      <MenuItem value="Slow_movement">Slow Movement</MenuItem>
                      <MenuItem value="Grief_journal">Grief Journal</MenuItem>
                    </Select>
                  </FormControl>
                </ThemeProvider>
              </div>
					{renderSelectedComponent()} {/* Render selected component */}
				</div>
				
			</div>
		</div>
	);
};

export default WelcomePage;