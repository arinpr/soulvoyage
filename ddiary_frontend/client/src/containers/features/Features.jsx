import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Personalized Recommendations',
    text: 'AI algorithms use the analysis of past entries to suggest personalized prompts or activities that could enhance well-being or productivity based on identified patterns.',
  },
  {
    title: 'Visualizations and Reports',
    text: 'This journaling platform will present data in visually comprehensible formats such as graphs, charts, or summaries. These visual representations help users easily interpret and comprehend their journaling data.',
  },
  {
    title: 'Mood Analysis',
    text: 'It will detect and analyze the emotions expressed in journal entries. It categorizes text into positive, negative, or neutral sentiments, providing an overview of the emotional tone of entries over time.',
  },
  {
    title: 'Personalized Recommendations',
    text: 'Platform will use the analysis of past entries to suggest personalized prompts or activities that could enhance well-being or productivity based on identified patterns.',
  },
];

const Features = () => {

  const routeRegistration = () =>{ 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="gpt3__features section__padding" id="journaling_analytics">
      <div className="gpt3__features-heading">
        
        <h1 className="gradient__text">AI-based journaling analytics involves using artificial intelligence techniques to analyze and derive insights from the content of journals or personal diaries.</h1>
        <a href='#' onClick={routeRegistration}>
          <p>Request Early Access to Get Started</p>
        </a>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features;
