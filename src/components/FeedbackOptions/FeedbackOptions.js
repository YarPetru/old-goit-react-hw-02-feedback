import React from 'react';

const FeedbackOptions = ({
  onLeaveGoodFeedback,
  onLeaveNeutralFeedback,
  onLeaveBadFeedback,
}) => (
  <div>
    <button type="button" onClick={onLeaveGoodFeedback}>
      Good
    </button>
    <button type="button" onClick={onLeaveNeutralFeedback}>
      Neutral
    </button>
    <button type="button" onClick={onLeaveBadFeedback}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
