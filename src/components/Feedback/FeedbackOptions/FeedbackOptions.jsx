import styles from '../Feedback.module.scss';

const FeedbackOptions = ({ getGood, getNeutral, getBad }) => {
  return (
    <ul className={styles.feedback__list}>
      <li className={styles.feedback__listItem}>
        <button className={styles.feedback__btn} onClick={getGood}>
          Good
        </button>
      </li>
      <li className={styles.feedback__listItem}>
        <button className={styles.feedback__btn} onClick={getNeutral}>
          Neutral
        </button>
      </li>
      <li className={styles.feedback__listItem}>
        <button className={styles.feedback__btn} onClick={getBad}>
          Bad
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;
