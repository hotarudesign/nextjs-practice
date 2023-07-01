import React from "react";
import styles from "../styles/Home.module.css";

export function Headine(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>
      <p className={styles.description}>
        Get started by editing <code>pages/{props.page}.js</code>
      </p>
    </div>
  );
}