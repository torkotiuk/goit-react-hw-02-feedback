import styles from '../Feedback.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {/* <h2 className={styles.feedback__statTitle}>Statistics</h2> */}
      <ul className={styles.feedback__statList}>
        <li className={styles.feedback__statList__item}>Good: {good}</li>
        <li className={styles.feedback__statList__item}>Neutral: {neutral}</li>
        <li className={styles.feedback__statList__item}>Bad: {bad}</li>
        <li className={styles.feedback__statList__item}>Total: {total}</li>
        <li className={styles.feedback__statList__item}>
          Positive feedback: {positivePercentage} %
        </li>
      </ul>
    </>
  );
};

export default Statistics;
