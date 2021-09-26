import React from 'react';
import Notification from '../Notification/Notification';
import StatisticsList from './StatisticsList';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    {total === 0 ? (
      <Notification message="No feedback given" />
    ) : (
      <StatisticsList
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    )}
  </div>
);

// const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
//   <ul className={s.statisticsList}>
//     <li>Good: {good}</li>
//     <li>Neutral: {neutral}</li>
//     <li>Bad: {bad}</li>
//     <li>Total: {total}</li>
//     <li>Positive Feedback: {positivePercentage}%</li>
//   </ul>
// );

export default Statistics;
