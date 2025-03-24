import { useState } from "react";
import styles from "./profile.module.css";
export default function Profile({ name, age, bio }) {
  const [visible, setVisible] = useState(false);
  function showHide() {
    setVisible(!visible);
  }
  return (
    <div className={styles.profileContainer}>
      <button className={styles.profileShownButton} onClick={showHide}>
        show/hidden
      </button>
      {visible ? (
        <div className={styles.descriptionContainer}>
          <h3>{name}</h3>
          <p>Age: {age}</p>
          <p>{bio}</p>
        </div>
      ) : (
        <p className={styles.invalidProfile}>No profile to show!</p>
      )}
    </div>
  );
}
