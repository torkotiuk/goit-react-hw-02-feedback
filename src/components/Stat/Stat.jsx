import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '10px',
    width: '350px',
  },
  list: {
    backgroundColor: 'rgb(255, 220, 123)',
    width: '310px',
    height: '115px',
    border: '1px solid grey',
    borderRadius: '4px',
    padding: '10px',
  },
}));

const Stat = ({ good, neutral, bad, onTotal, onPositiveFeedback }) => {
  const classes = useStyles();
  if (onPositiveFeedback !== 'NaN') {
    return (
      <div className={classes.container}>
        <ul className={classes.list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {onTotal}</li>
          <li>Positive feedback: {onPositiveFeedback}%</li>
        </ul>
      </div>
    );
  }
  return <p className={classes.list}>No feedback given</p>;
};

export default Stat;
