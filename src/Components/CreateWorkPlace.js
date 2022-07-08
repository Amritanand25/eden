import React, {useState} from 'react';
import Input from "./ReUsableComponents/Input/Input";
import classes from "../Styles/CreateWorkPlace.module.css";
import Button from "./ReUsableComponents/Button/Button";

const CreateWorkPlace = ({activeValueHandler}) => {
   const [fullName, setFullName] = useState("");
   const [displayName, setDisplayName] = useState("");
   const [warningMsg, setWarningMsg] = useState(false);
   const [loading, setLoading] = useState(false);

   const submitDetailsHandler = (e) => {
     e.preventDefault();
     if(fullName.trim().split('').length <= 2 || displayName.trim().split('').length <= 2)
     {
       setWarningMsg(true);

       setTimeout(() => {
         setWarningMsg(false);
       }, 5000);

       return;
     }

     localStorage.setItem('userName', fullName);
     localStorage.setItem('displayName', displayName);

     setLoading(true);
     setTimeout(() => {
       setDisplayName("");
       setFullName("");
       activeValueHandler(2);
       setLoading(false);
     }, 2000)

   }

  return (
    <div>
      <div style={{marginBottom: "3rem"}}>
        <h1 className={classes.title}>Welcome! First things first...</h1>
        <p className={classes.subTitle}>You can always change them later.</p>
      </div>
      <div className={classes.formContainer}>
        <form onSubmit={submitDetailsHandler}>
          <Input
            type="text"
            label="Full Name"
            placeholder="Steve Jobs"
            required={true}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            type="text"
            label="Display Name"
            placeholder="Steve"
            value={displayName}
            required={true}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <Button disabled={loading} type="submit" fullWidth={true}>{loading ? "Processing..." : "Create Workspace"}</Button>
          {warningMsg && <p style={{fontSize: "12px", marginTop: "5px", color: "red"}}>Full Name & Display Name must be more than 2 characters.</p>}
        </form>
      </div>
    </div>
  )
}

export default CreateWorkPlace;