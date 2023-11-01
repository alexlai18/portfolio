import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Intro.module.css";

export const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title} >Hi, I'm Alexander!</h1>
        <p className={styles.description} >
          I'm a full-stack developer with 2 years of experience with React, NodeJS, NextJS, OracleDB, MongoDB and many more technologies.
          Click below to reach out to me!
        </p>
        <a className={styles.contactBtn} href="mailto:alaiier18@gmail.com">Contact Me</a>
      </div>
      <img className={styles.profileImg} src={getImageUrl("intro/profile.png")} alt="Image of me" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};