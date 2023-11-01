import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.info}>
        <h2>Contact</h2>
        <p>Feel free to reach out to me!</p>
      </div>
      <ul className={styles.socials}>
        <li className={styles.social}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Ico"/>
          <a href="mailto:alaiier18@gmail.com">alaiier18@gmail.com</a>
        </li>
        <li className={styles.social}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Ico"/>
          <a href="https://www.linkedin.com/in/alexander-lai-a7a677200/">My LinkedIn</a>
        </li>
        <li className={styles.social}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Ico"/>
          <a href="https://github.com/alexlai18">My GitHub</a>
        </li>
      </ul>
    </footer>
  )
}
