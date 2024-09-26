import React from 'react'
import { Sidebar,  UserAnalytics} from '../components';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Doughnut, Bar, Line } from "react-chartjs-2";

const AnalysisPage = () => {
    return (
        <div className='soul-voyger_analysis-page' id = 'analysis-page'>
            <div className="container-fluid row d-flex">
              <Sidebar/>
              <UserAnalytics/>
            </div>
        </div>
    )
 }

export default AnalysisPage