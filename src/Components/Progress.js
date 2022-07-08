import React from 'react';
import classes from '../Styles/Progress.module.css';

const Progress = ({value, firstValue, lastValue, active}) => {
  return <div className={classes.singleProgressContainer}>
    {!firstValue &&
    <div className={active ? classes.activeLine : classes.nonActiveLine}>

    </div>
    }

    <div className={active ? classes.circularActiveNumber : classes.circularNonActiveNumber}>
      {value}
    </div>

    {!lastValue && <div className={active ? classes.activeLine : classes.nonActiveLine}>

    </div>}
  </div>
}

export default Progress;