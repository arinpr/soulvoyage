

import './aiJournal.css'

export default function AiJournal(){
    return(<>
        <section id='journal'>
      
        <h3 className="text-center fs-1 fw-bold custom-text-color-h pt-5">
          The Possibilities Are Beyond <br />
          Your Imagination
        </h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 possibilities-custom gx-5">
          <div className="col mb-5">
            <img src="assets/img/avatar/group1.svg" className="" />
            <h5 className="my-3 custom-text-color-h">Personalized Insights</h5>
            <p className="custom-text-p">
              AI algorithms can detect and analyze emotions expressed in your
              journal entries. This feature can help track mood patterns,
              identify triggers for emotional highs or lows, and offer
              suggestions for coping mechanisms or interventions.
            </p>
          </div>
          <div className="col mb-5">
            <img src="assets/img/avatar/group2.svg" className="" />
            <h5 className="my-3 custom-text-color-h">Therapeutics</h5>
            <p className="custom-text-p">
              This AI-based journaling tools is integrated with mental health or
              wellness apps, providing users with guidance, exercises, or
              interventions based on their journal content.
            </p>
          </div>
          <div className="col mb-5">
            <img src="assets/img/avatar/group3.svg" className="" />
            <h5 className="my-3 custom-text-color-h">Motivational Stories</h5>
            <p className="custom-text-p">
              Depending upon your mood, this AI based journal will show to
              motivational stories to help you keep a positive mindset.
            </p>
          </div>
          <div className="col mb-5">
            <img src="assets/img/avatar/group4.svg" className="" />
            <h5 className="my-3 custom-text-color-h">Privacy and Security</h5>
            <p className="custom-text-p">
              This tool ensures the privacy and security of your journal entries
              through encryption, secure storage, or even personalized access
              controls.
            </p>
          </div>
          <div className="col mb-5">
            <img src="assets/img/avatar/group5.svg" className="" />
            <h5 className="my-3 custom-text-color-h">Entry Suggestions</h5>
            <p className="custom-text-p">
              This AI-powered journaling platform can analyze your previous
              entries and suggest topics or prompts for your next journal entry.
              This is based on sentiment analysis, recurring themes, or keywords
              in your writing.
            </p>
          </div>
          <div className="col mb-5">
            <img src="assets/img/avatar/group6.svg" className="" />
            <h5 className="my-3 custom-text-color-h">Smart Search</h5>
            <p className="custom-text-p">
              This platform can categorize entries, making it easier to search
              for specific topics or themes.
            </p>
          </div>
        </div>
     
    </section>
    </>);
}