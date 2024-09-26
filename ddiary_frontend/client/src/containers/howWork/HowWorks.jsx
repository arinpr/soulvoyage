import React from 'react'
import './howWorks.css';
function HowWorks() {
  return (
    <>
    <section className='pb-5' id='journaling_analytics'>
      <div className="container">
        <div className="text-center">
          <p className="how-it-works-p fs-1 fw-bold custom-text-color-h m-0">
            How it works?
          </p>
          <p className="m-0">The possibilities are beyond your imagination</p>
        </div>
        <div className="row row-cols-1 row-cols-md-2 how-it-works-custom">
          <div className="col-12 col-lg-4 text-wrap">
            <p className="how-it-works-p">
              AI-based journaling analytics involves using artificial
              intelligence techniques to analyze and derive insights from the
              content of journals or personal diaries.
            </p>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-12 col-lg-6 d-flex align-items-center">
                <img
                  src="assets/img/star.svg "
                  alt=""
                  className="img-fluid me-3"
                />
                <p className="how-custom-text-p m-0">
                  Personalized Recommendations
                </p>
              </div>
              <div className="col-12 col-lg-6 d-flex align-items-center">
                <img
                  src="assets/img/star.svg "
                  alt=""
                  className="img-fluid me-3"
                />
                <p className="how-custom-text-p m-0">
                Visualizations and Reports</p>
              </div>
            </div>

            <div className="row mt-lg-2">
              <div className="col-12 col-lg-6 d-flex align-items-center">
                <img
                  src="assets/img/star.svg "
                  alt=""
                  className="img-fluid me-3"
                />
                <p className="how-custom-text-p m-0">
                Mood Analysis
                </p>
              </div>
              <div className="col-12 col-lg-6 d-flex align-items-center">
                <img
                  src="assets/img/star.svg"
                  alt=""
                  className="img-fluid me-3"
                />
                <p className="how-custom-text-p m-0">
                Personalized Recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HowWorks