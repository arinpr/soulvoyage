import React from 'react'
import './userAnalytics.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

const UserAnalytics = () => {

  const data =  {
    
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July"
    ],
    
    datasets: [
      {
        label: "Number of Diary Entry Every Month",
        backgroundColor: "#0069b4b3",
        borderColor: "#0069b4",
        borderWidth: 1,
        hoverBackgroundColor: "#0069b447",
        hoverBorderColor: "#0069b4",
        data: [65, 59, 100, 81, 56, 55, 40]
      }
    ]
  }

  return (
    <div className='user-analytics-container col-md-8'>
        <div className='user-analytics_journal-activity d-flex '>
            <h2>Diary History</h2>

            <Container>
              <Row>
                <Col>
                  <Bar
                    data={data}
                    style={{ width: "100%", height: "50%" }}
                    options={{
                      maintainAspectRatio: true
                    }}
                  />
                </Col>
              </Row>
            </Container>
        
        <h2>Journal Activity Stats</h2>
        <div className='user-analytics_activity-stats-container'>
          
          <div className='user-analytics_activity-stats'>
            Total Time 
          </div>

          <div className='user-analytics_activity-stats'>
            Average Time Per Day 
          </div>

          <div className='user-analytics_activity-stats'>
            Total Completed Prompts
          </div>

          <div className='user-analytics_activity-stats'>
            Word Count
          </div>

          <div className='user-analytics_activity-stats'>
          AVERAGE NUMBER OF DIARY ENTRY PER WEEK
          </div>
        </div>
        <div className='user-analytics_emotion-container'></div>
            <h2>Journal Stats</h2>
            <br></br>
            Word Count
            <br></br>
            Average number of diary entry/ week
            <br></br>
            Average Time spent per day
            <br></br>
            Emotion Categories
            <br></br>
            Emotion Analysis graph with Month on x axis and Emotion on y axis - plotting average number of entries of a particual emotion in  a month      
        </div>
    </div>
  )
}

export default UserAnalytics