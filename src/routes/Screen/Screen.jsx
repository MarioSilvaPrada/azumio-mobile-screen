import React from 'react';
import './Screen.css';

// components
import Option from 'components/Option';

const Screen = () => {
  const optionsData = [
    {
      value: 'Blood Glucose',
      action: () => console.log('Blood Glucose selected'),
    },
    {
      value: 'Medication',
      action: () => console.log('Medication selected'),
    },
    {
      value: 'Food Tracking',
      action: () => console.log('Food Tracking selected'),
    },
    {
      value: 'Exercise',
      action: () => console.log('Exercise selected'),
    },
    {
      value: 'Weight Management',
      action: () => console.log('Weight Management selected'),
    },
    {
      value: 'Blood Pressure',
      action: () => console.log('Blood Pressure selected'),
    },
    {
      value: 'A1C',
      action: () => console.log('A1C selected'),
    },
  ];
  return (
    <div className="container">
      <div className="header">
        <h1 className="header-title">What are your main areas of focus?</h1>
      </div>
      <div className="description">This will help us build a personalized experience for you.</div>
      <div className="options-wrapper">
        {optionsData.map(({ value }) => <Option key={value} value={value} />)}
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
        <div className="footer-btn__done">Done</div>
      </div>
    </div>
  );
};

export default Screen;
