import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div>
    {options.map(option => (
      <button type="button" onClick={onLeaveFeedback} className="button">
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
