import React, {useState} from 'react';
import classes from "../Styles/MainContainer.module.css";
import Progress from "./Progress";
import CreateWorkPlace from "./CreateWorkPlace";
import HomeSetUp from "./HomeSetUp";
import PlanningToUse from "./PlanningToUse";
import Congratulation from "./Congratulation";

const MainContainer = () => {
  const [activeValue, setActiveValue] = useState(1);

  const activeValueHandler = (id) => {
    setActiveValue(id);
  }

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.logoContainer}>
          <img src="/Images/assets/edenLogo.png" width="120px" height="60px" alt="logo"/>
        </div>

        <div className={classes.progressContainer}>
          {
            progressArr.map((item, i) => (
              <Progress key={item.id} {...item} active={(i + 1) <= activeValue}/>
            ))
          }
        </div>
        {(+activeValue === 1) && <CreateWorkPlace activeValueHandler={activeValueHandler}/>}
        {(+activeValue === 2) && <HomeSetUp activeValueHandler={activeValueHandler}/>}
        {(+activeValue === 3) && <PlanningToUse activeValueHandler={activeValueHandler}/>}
        {(+activeValue === 4) && <Congratulation/>}
      </div>
    </div>
  )
}

export default MainContainer;

const progressArr = [
  {
    value: 1,
    firstValue: true,
    lastValue: false,
  },
  {
    value: 2,
    firstValue: false,
    lastValue: false
  },
  {
    value: 3,
    firstValue: false,
    lastValue: false
  },
  {
    value: 4,
    firstValue: false,
    lastValue: true
  }
]

