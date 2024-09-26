import {React, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "./sidebar-old.css";
import { Link } from "react-router-dom";
import { getTokenEmailUsername } from "../../util/token";
import { Tooltip } from "@mui/material";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import Form from 'react-bootstrap/Form';
// import { useHistory } from 'react-router-dom';
import Select from 'react-select';


const Sidebar = ({ onDropdownChange, selectedValue }) => {

  const { username } = getTokenEmailUsername();
  // const history = useHistory();
  function handleLogout() {
    localStorage.removeItem("SavedToken");
    localStorage.removeItem("SavedEmail");
    localStorage.removeItem("SavedUserName");
  }


  const data = [
    {
      value: 1,
      text: 'Up Arrow',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
      </svg>
    },
    {
      value: 2,
      text: 'Down Arrow',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
      </svg>
    },
    {
      value: 3,
      text: 'Left Arrow',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
      </svg>
    },
    {
      value: 4,
      text: 'Right Arrow',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
      </svg>
    }
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange2 = (event) => {
    setSelectedOption(event);
    const selectedValue = event.target.value;
    onDropdownChange(selectedValue);
    // console.log(event.target.value);
    console.log(event.target.value);
    // history.push(selectedPage);

  };


  return (
    <div className="sidebar col-2 min-vh-100 d-flex">
      <div className="sidebar_list d-flex justify-content-between flex-column">
        <div className="mt-2">
          <a className="text-white d-none d-sm-inline d-flex align-itemcenter ms-1 mt-2">
            <span className="ms-1 fs-4">Soul Voyage</span>
          </a>
          <hr className="text-secondary d-none d-sm-block" />
          <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a
                  href="/welcome-page"
                  className="nav-link text-white fs-6"
                  aria-current="page"
              >
                <i className="bi bi-house"></i>
                <span className="ms-3 d-none d-sm-inline sidebar-home">Home</span>
              </a>
            </li>
            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a
                  href="/all-entries"
                  className="nav-link text-white fs-6"
                  aria-current="page"
              >
                <i className="bi bi-journal-text"></i>
                <span className="ms-3 d-none d-sm-inline sidebar-enteries">Entries</span>
              </a>
            </li>
            <li
                // title="Part of Upcoming Release"
                className="nav-item text-white fs-4 my-1 py-2 py-sm-0 disabled-sidebar-action"
            >
              <Tooltip placement="right-start" title="Part of Upcoming Release">
                <Link
                    // to="/analysis-page"
                    className="nav-link text-white fs-6  disabled-sidebar-action"
                    aria-current="page"
                >
                  <i className="bi bi-clipboard-data"></i>
                  <span className="sidebar-analysis ms-3 me-4 d-none d-sm-inline" id="sidebar-analysis">Analysis</span>
                  <i className="bi bi-cup-hot sidebar-analysis-second-figure"></i>
                </Link>
              </Tooltip>
            </li>

            <li
                // title="Part of Upcoming Release"
                className="nav-item text-white fs-4 my-1 py-2 py-sm-0"
            >
              <Tooltip placement="right-start" title="Part of Upcoming Release">
                <a
                    href="#"
                    className="nav-link text-white fs-6 disabled-sidebar-action"
                    aria-current="page"
                >
                  <i className="bi bi-lightbulb"></i>
                  <span className="ms-3 me-4 d-none d-sm-inline sidebar-insights">Insights</span>
                  <i className="bi bi-cup-hot sidebar-insights sidebar-analysis-second-figure"></i>
                </a>
              </Tooltip>
            </li>
            <li
                // title="Part of Upcoming Release"
                className="nav-item text-white fs-4 my-1 py-2 py-sm-0 disabled-sidebar-action"
            >
              <Tooltip placement="right-start" title="Part of Upcoming Release">
                <a
                    href="#"
                    className="nav-link text-white fs-6 disabled-sidebar-action"
                    aria-current="page"
                >
                  <i className="bi bi-people"></i>
                  <span className="ms-3 me-4 d-none d-sm-inline sidebar-stories">Stories</span>
                  <i className="bi bi-cup-hot sidebar-stories sidebar-analysis-second-figure"></i>
                </a>
              </Tooltip>
            </li>

            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0 sidebar-dropdown">
                <select className="ms-3 d-none d-sm-inline sidebar-journal-template-selct"
                        onChange={handleChange2}>
                  <option value="#">Template</option>
                  <option default value="Grief_journal">Grief_journal</option>
                  <option value="Safe_space">Safe_space</option>
                  <option value="Slow_movement">Slow_movement</option>
                </select>
            </li>


            {/*<li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">*/}
            {/*<Select*/}
            {/*    placeholder="Template"*/}
            {/*    value={selectedOption}*/}
            {/*    options={data}*/}
            {/*    onChange={handleChange2}*/}
            {/*    getOptionLabel={e => (*/}
            {/*        <div style={{ display: 'flex', alignItems: 'center' }}>*/}
            {/*          {e.icon}*/}
            {/*          <span style={{ marginLeft: 5 }}>{e.text}</span>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*/>*/}

            {/*/!*{selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }}>*!/*/}
            {/*/!*  <b>Selected Option:</b> {selectedOption.value}*!/*/}
            {/*/!*</div>}*!/*/}
            {/*</li>*/}



          </ul>
        </div>
        <div className="dropdown open">
          <a
              className="text-decoration-none text-white dropdown-toggle p-3"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
          >
            <i className="bi bi-person-circle"></i>{" "}
            <span className="ms-2 d-none d-sm-inline">{username}</span>
          </a>
          <div className="dropdown-menu" aria-labelledby="triggerId">
            <a className="dropdown-item" href="#">
              Profile
            </a>
            <a className="dropdown-item" href="#">
              Settings
            </a>
            <a className="dropdown-item" href="./" onClick={handleLogout}>
              Log Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
