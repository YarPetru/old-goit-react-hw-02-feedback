import s from './Statistics.module.css';

const StatisticsList = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={s.statisticsList}>
    <li className={s.item}>
      Good: <span>{good}</span>
    </li>
    <li className={s.item}>
      Neutral: <span>{neutral}</span>
    </li>
    <li className={s.item}>
      Bad: <span>{bad}</span>
    </li>
    <li className={s.item}>
      Total: <span>{total}</span>
    </li>
    <li className={s.item}>
      Positive feedback: <span>{positivePercentage}%</span>
    </li>
  </ul>
);

export default StatisticsList;
