import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: {title, imageSrc, description, skills, demo, source} }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={getImageUrl(imageSrc)} alt={`Img for ${title}`} />
      <h3 className={styles.titles}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {
          skills.map((skill, id) => {
            return (
              <li className={styles.skill}key={id}>{skill}</li>
            )
          })
        }
      </ul>
      <div className={styles.links}>
        {demo && <a className={styles.link} href={demo}>Demo</a>}
        {source && <a className={styles.link} href={source}>Code</a>}
      </div>
    </div>
  )
}
