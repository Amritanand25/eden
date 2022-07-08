import React, {useState} from 'react';
import classes from "../Styles/CreateWorkPlace.module.css";
import {ImUser} from "react-icons/im";
import {HiUserGroup} from "react-icons/hi";
import styles from "../Styles/PlanningToUse.module.css";
import Button from "./ReUsableComponents/Button/Button";

const Card = ({Icon, heading, description, id, callBackFun, activeId}) => {

   const activeActionHandler = () => {
     let data = {
       id: id,
       topic: heading,
       description: description
     }
     data = JSON.stringify(data);
     localStorage.setItem('plan', data);
     callBackFun(id);
   }

  return <div onClick={activeActionHandler}
              className={(id === activeId) ? `${styles.box} ${styles.activeCard}` : `${styles.box} ${styles.nonActiveCard}`}>
    <div className={(id === activeId) ? styles.activeIcon : styles.nonActiveIcon}>{Icon}</div>
    <h5>{heading}</h5>
    <p style={{fontSize: "1rem"}}
       className={(id === activeId) ? styles.activeIcon : styles.nonActiveIcon}>{description}</p>
  </div>
}

const PlanningToUse = ({activeValueHandler}) => {
  const [activeCard, setActiveCard] = useState(1);
  const [loading, setLoading] = useState(false);

  const callBackFun = (id) => {
    setActiveCard(id);
  }

  const selectPlanAndMove = () => {
    setLoading(true);
    setTimeout(() => {
      activeValueHandler(4);
      setLoading(false);
    }, 2000)

  }

  return (<div>
    <div style={{marginBottom: "3rem"}}>
      <h1 className={classes.title}>How are you planning to use Eden?</h1>
      <p className={classes.subTitle}>We'll streamline your setup experience accordingly.</p>
    </div>
      <div className={styles.cardContainer}>
        {
          cardData.map(item => (<Card key={item.id} activeId={activeCard} callBackFun={callBackFun} {...item} />))
        }
      </div>
     <div className={styles.cardContainer}>
       <Button disabled={loading} onClick={selectPlanAndMove} style={{maxWidth: "68%", marginTop: "1.5rem"}} type="button" fullWidth={true}>{loading ? "Processing..." : "Create Workspace"}</Button>
     </div>

  </div>)
}

export default PlanningToUse;

const cardData = [
  {
    id: 1,
    Icon: <ImUser/>,
    heading: "For myself",
    description: "Write better, Think more clearly. Stay organized."
  },
  {
    id: 2,
    Icon: <HiUserGroup/>,
    heading: "With my team",
    description: "Wikis, docs, tasks & projects, all in one place."
  }
]