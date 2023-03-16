import css from './Statistics.module.css';

type StatisticProps = {
   total: number,
  positivePercentage: number,
  good: number,
  neutral: number,
  bad: number,
}

export const Statistics = ({
  total,
  positivePercentage,
  good,
  neutral,
  bad,
}: StatisticProps):JSX.Element => {
  return (
    <>
      <h3 className={css.title}>Statistics</h3>
      <ul className={css.list}>
      
          <li>
          <p>good: { good}</p>
        </li>
        <li>
          <p>neutral: { neutral}</p>
        </li>
        <li>
          <p>bad: { bad}</p>
          </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage || 0}%</p>
        </li>
      </ul>
    </>
  );
};
