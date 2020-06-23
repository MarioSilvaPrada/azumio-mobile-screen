import React from 'react';
import './Screen.css';

// components
import Option from 'components/Option';

const Screen = () => {
  const optionsData = [
    {
      value: 'Blood Glucose',
    },
    {
      value: 'Medication',
    },
    {
      value: 'Food Tracking',
    },
    {
      value: 'Exercise',
    },
    {
      value: 'Weight Management',
    },
    {
      value: 'Blood Pressure',
    },
    {
      value: 'A1C',
    },
  ];
  return (
    <div className="container">
      <div>
        <div className="header">
          <h1 className="header-title">What are your main areas of focus?</h1>
        </div>
        <div className="description">This will help us build a personalized experience for you.</div>
        <div className="options-wrapper">
          {optionsData.map(({ value }) => <Option key={value} value={value} />)}
        </div>
      </div>
      <div className="footer">
        <div className="footer-btn__goBack">Back</div>
        <div className="footer-progress">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot current" />
        </div>
        <div className="footer-btn__done btn-main">Done</div>
      </div>
    </div>
  );
};

export default Screen;
