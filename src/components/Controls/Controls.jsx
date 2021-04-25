import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  container: {
    width: '350px',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
    border: '1px solid grey',
    borderRadius: '4px',
    padding: '10px',
  },
}));

const Controls = ({ onGood, onNeutral, onBad }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <ul className={classes.list}>
          <li>
            <Button variant="contained" color="primary" onClick={onGood}>
              Good
            </Button>
          </li>
          <li>
            <Button variant="contained" onClick={onNeutral}>
              Neutral
            </Button>
          </li>
          <li>
            <Button variant="contained" color="secondary" onClick={onBad}>
              Bad
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Controls;
