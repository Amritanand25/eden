import React, {useState} from 'react';
import classes from "../Styles/CreateWorkPlace.module.css";
import Input from "./ReUsableComponents/Input/Input";
import styles from "../Styles/HomeSetUp.module.css";
import Button from "./ReUsableComponents/Button/Button";

const HomeSetUp = ({activeValueHandler}) => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [url, setUrl] = useState("");
  const [warningMsg, setWarningMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitDetailsHandler = (e) => {
    e.preventDefault();
    if(workspaceName.trim().split('').length <= 2){
      setWarningMsg(true);

      setTimeout(() => {
        setWarningMsg(false);
      }, 5000);

      return;
    }

    localStorage.setItem('workspaceName', workspaceName);
    localStorage.setItem('url', url);

    setLoading(true);
    setTimeout(() => {
      setWorkspaceName("");
      setUrl("");
      activeValueHandler(3);
      setLoading(false);
    }, 2000);
  }

  return (
    <div>
      <div style={{marginBottom: "3rem"}}>
        <h1 className={classes.title}>Let's set up a home for all your work</h1>
        <p className={classes.subTitle}>You can always create another workspace later.</p>
      </div>
      <div className={styles.formContainer} >
        <form className={styles.form} onSubmit={onSubmitDetailsHandler}>
          <Input required={true} value={workspaceName} onChange={(e) => setWorkspaceName(e.target.value)} type="text" placeholder="Eden" label="Workspace Name" />
          <label className={styles.label}>Workspace URL <span className={styles.lightTagLabel}>(Optional)</span></label>
          <div className={styles.urlContainer}>
            <div className={styles.exampleUrl}>
              www.eden.com/
            </div>
            <div>
              <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" className={styles.urlInputStyle} />
            </div>
          </div>
          <Button disabled={loading} type="submit" fullWidth={true}>{loading ? "Processing..." : "Create Workspace"}</Button>
          {warningMsg && <p style={{fontSize: "12px", marginTop: "5px", color: "red"}}>Workspace Name must be more than 2 characters.</p>}
        </form>
      </div>
    </div>
  )
}

export default HomeSetUp;