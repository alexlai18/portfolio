import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title} id="about">About</h1>
      <ul className={styles.menuItems}>
        <li className={styles.aboutBlock}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
          <div className={styles.aboutItemInfo} >
            <h3>
              Frontend Developer
            </h3>
            <p>
              I'm a full-stack developer with experience in designing and developing fast, responsive and optimised web applications.
            </p>
          </div>
        </li>
        <li className={styles.aboutBlock}>
          <img src={getImageUrl("about/serverIcon.png")} alt="server" />
          <div className={styles.aboutItemInfo} >
            <h3>
              Backend Developer
            </h3>
            <p>
              I have experience developing efficient backend REST APIs and designing databases with OracleDB and MongoDB.
            </p>
          </div>
        </li>
        <li className={styles.aboutBlock}>
          <img src={getImageUrl("about/uiIcon.png")} alt="design" />
          <div className={styles.aboutItemInfo} >
            <h3>
              Cloud Engineer
            </h3>
            <p>
              I have experience building cloud infrastructure, mainly for Microsoft Azure.
              I also have experience in DevOps, automating pipelines with bash and UNIX scripting, working with technologies such as Jenkins and Docker.
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
};
