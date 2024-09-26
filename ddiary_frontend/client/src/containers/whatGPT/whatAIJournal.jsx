import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatAIJournal.css';

const WhatAIJournal = () => (
  <div className="gpt3__whatAIJournal section__margin" id="journal">
    <div className="gpt3__whatAIJournal-feature">
      <Feature title="What is AI Journal" text="AI-based journaling aims to augment the traditional practice of journaling by offering intelligent features that support reflection, self-awareness, and personal development. These tools can enhance the journaling experience by providing valuable insights and making the process more engaging and tailored to individual needs." />
    </div>
    <div className="gpt3__whatAIJournal-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatAIJournal-container">
      <Feature title="Personalized Insights" text="AI algorithms can detect and analyze emotions expressed in your journal entries. This feature can help track mood patterns, identify triggers for emotional highs or lows, and offer suggestions for coping mechanisms or interventions." />
      <Feature title="Therapeutics" text="This AI-based journaling tools is integrated with mental health or wellness apps, providing users with guidance, exercises, or interventions based on their journal content." />
      <Feature title="Motivational Stories" text="Depending upon your mood, this AI based journal will show to motivational stories to help you keep a positive mindset." />
      <Feature title="Privacy and Security" text="This tool ensures the privacy and security of your journal entries through encryption, secure storage, or even personalized access controls." />
      <Feature title="Entry Suggestions" text="This AI-powered journaling platform can analyze your previous entries and suggest topics or prompts for your next journal entry. This is based on sentiment analysis, recurring themes, or keywords in your writing." />
      <Feature title="Smart Search" text="This platform can categorize entries, making it easier to search for specific topics or themes." />
    </div>
  </div>
);

export default WhatAIJournal;