import React, {useEffect, useState} from 'react';
import { BsFillCheckCircleFill } from "react-icons/bs";
import classes from "../Styles/Congratulation.module.css";
import Button from "./ReUsableComponents/Button/Button";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'

const Congratulation =(history) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(localStorage.getItem('displayName'));
  }, []);

  return (
    <div style={{marginTop: "6rem"}}>
       <div className={classes.container}><BsFillCheckCircleFill className={classes.icon} /></div>
      <div>
        <h1 className={classes.heading}>Congratulations, {name || "N/A"}!</h1>
        <p className={classes.description}>You have completed onboarding, you can start using the Eden!</p>
      </div>
      <div className={classes.container}>
       <Router>
         <Link to="/home">
           <Button onClick={() => localStorage.clear()} style={{paddingLeft: "6rem", paddingRight: "6rem"}}>Launch Eden</Button>
         </Link>
         <Routes>
           <Route path="/home" />
         </Routes>
       </Router>
      </div>
    </div>
  )
}

export default Congratulation;