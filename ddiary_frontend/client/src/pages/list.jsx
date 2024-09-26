import React, {useEffect, useState} from "react";
import {  List, Statistics } from "../components";
import MainSidebar from "../components/navbar/MainSidebar";

const list = () => {

    //*****************************
    const prodUrl = import.meta.env.VITE_PROD_PATH + "/getAllJournalEntries";
    const devUrl = import.meta.env.VITE_LOCAL_PATH + "/getAllJournalEntries";
    const currentEnv = import.meta.env.VITE_APP_DEV;
    // const [dbpath, setDbpath] = useState();
    const dbpath = currentEnv === "local" ? devUrl : prodUrl;
    //
    // useEffect(() => {
    //     if (currentEnv === "local") {
    //         setDbpath(devUrl);
    //     } else {
    //         setDbpath(prodUrl);
    //     }
    // }, []);
    //*****************************

  return (
    

    <div className="soul-voyger_welcome-page" id="all-entries">
			<div className="column  d-flex flex-grow-1">
				{/*<h1>Selected Value: {selectedValue}</h1>*/}
				{/* <Sidebar onDropdownChange={handleDropdownChange} selectedValue={selectedValue} className="sidebar-welcome-page"/>
				{renderSelectedComponent()} */}
				{/*<Slow_movement className="diaryentry-welcome-page"/>*/}
				{/*<DiaryEntry className="diaryentry-welcome-page"/>*/}

				{/* <Statistics /> */}
				<MainSidebar />
				<div className="content">
        <List 
            dbpath={dbpath}
        />
				</div>
				
			</div>
		</div>
  );
};

export default list;
