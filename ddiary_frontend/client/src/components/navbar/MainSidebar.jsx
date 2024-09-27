import React, { useEffect, useState } from "react";
import styled from "styled-components";
import './mainSidebar.css'; 
import { Link, useNavigate } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Dropdown } from 'react-bootstrap';
// Import React Icons
import { FaHome, FaUserAlt, FaChartLine, FaBars, FaTimes, FaLightbulb, FaUsers } from 'react-icons/fa'; // Example icons
import { getTokenEmailUsername } from "../../util/token";
import { Tooltip } from '@mui/material';
const Container = styled.div`
  float:left;
  height: 100%;
  z-index: 2;
  background-color: #D9D9D9;
  @media (max-width: 768px) {
    position: fixed;
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: ${(props) => (props.isOpen ? '12rem' : '3.5rem')}; 
  height: 100%;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transition: width 0.3s ease;
`;

const Logo = styled.div`
  color: var(--white);
  text-align: center;

  h2 {
    font-size: 1.5rem;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.2rem;
      content: "SV";
    }
  }
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  position: absolute;
  top: 6rem;
  left: 0;
  width: ${(props) => (props.isOpen ? '12rem' : '3.5rem')};
  transition: all 0.3s ease;
  overflow-y:scroll;
  scrollbar-width:none;
`;

const ItemDisabled = styled(Link)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  display: flex;
  align-items: center;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')}; 

  &:hover {
    border-right: ${(props) => (props.disabled ? 'none' : '4px solid var(--white)')};
  }

  svg {
    width: 1.2rem;
    height: auto;
  }
`;

const Item = styled(Link)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  svg {
    width: 1.2rem;
    height: auto;
  }
`;

const Text = styled.span`
  width: 100%;
  overflow: hidden;
  margin-left: 1.5rem;
  transition: all 0.3s ease;
  display: ${(props) => (props.isOpen ? 'inline' : 'none')};
`;


const HamburgerIcon = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  cursor: pointer;
  z-index: 100; 
  
  svg {
    width: 1.5rem;
    height: auto;
    fill: white;
    transition: transform 0.3s ease;
  }

  ${(props) => props.isOpen && `
    svg {
      transform: rotate(90deg);
    }
  `}
`;

const MainSidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768); 
  const navigate = useNavigate();
  const [selectedValue] = useState(localStorage.getItem('selectedTemplate') || '');
  const { username } = getTokenEmailUsername();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false); 
      } else {
        setIsOpen(true); 
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

 
  const handleUserDropdownChange = (value) => {
    if (value === "logout") {
      // handle logout functionality
      localStorage.removeItem("SavedToken");
      localStorage.removeItem("SavedEmail");
      localStorage.removeItem("SavedUserName");
      localStorage.removeItem("selectedTemplate");
      navigate(`/`);
    } 
    // else {
    //   navigate(`/${value}`);
    // }
  };
  return (
    <Container>
      <HamburgerIcon onClick={toggleSidebar} isOpen={isOpen}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </HamburgerIcon>

      <SidebarContainer isOpen={isOpen}>
        <Logo className="pt-5">
          <h2>{isOpen ? "Soul Voyage" : "SV"}</h2>
        </Logo>

        <SlickBar isOpen={isOpen}>
          <Item to={`/welcome-page?template=${selectedValue}`}>
            <FaHome />
            <Text isOpen={isOpen}>Home</Text>
          </Item>

          <Item to={"/all-entries"}>
            <FaUserAlt />
            <Text isOpen={isOpen}>Entries</Text>
          </Item>

          
          <Tooltip title="Part of upcoming release" placement="right" arrow>
            <span className="disabledItem">
              <ItemDisabled to={""} disabled={true}>
                <FaChartLine />
                <Text isOpen={isOpen}>Analysis</Text>
              </ItemDisabled>
            </span>
          </Tooltip>

          <Tooltip title="Part of upcoming release" placement="right" arrow>
            <span className="disabledItem">
              <ItemDisabled to={""} disabled={true}>
              <FaLightbulb />
                <Text isOpen={isOpen}>Insights</Text>
              </ItemDisabled>
            </span>
          </Tooltip>
           
          <Tooltip title="Part of upcoming release" placement="right" arrow>
            <span className="disabledItem">
              <ItemDisabled to={""} disabled={true}>
              <FaUsers />
                <Text isOpen={isOpen}>Stories</Text>
              </ItemDisabled>
            </span>
          </Tooltip>
         

          
          {/* New User Menu Item */}
          {isOpen? 
          <Item as="div">
            

            <FaUserAlt />
            <Dropdown className="large_dropdown">
              <Dropdown.Toggle 
                id="user-dropdown" 
               
                className="w-100" 
                style={{  color: 'white' }}
              >
                {username}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleUserDropdownChange("profile")}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleUserDropdownChange("settings")}>
                  Settings
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleUserDropdownChange("logout")}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
           
          </Item>
          :
          <Item as="div">
          <div className="custom_dropdown">

            <Dropdown>
              <Dropdown.Toggle 
                id="user-dropdowns" 
                className="w-100" 
                style={{  color: 'white' }}
              >
                <FaUserAlt />
              </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item onClick={() => handleUserDropdownChange("profile")}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleUserDropdownChange("settings")}>
                  Settings
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleUserDropdownChange("logout")}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>



            
            
          </div>
        </Item>
          }
          
         
        </SlickBar>
      </SidebarContainer>
    </Container>
  );
};

export default MainSidebar;
