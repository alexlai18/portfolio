import React from 'react'

import styles from "./Experience.module.css";
import frameworks from "../../utils/frameworks.json";
import experience from "../../utils/experience.json";
import { getImageUrl } from '../../utils';

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>
        Experience
      </h2>
      <div className={styles.info}>
        <div className={styles.frameworks}>
          {
            frameworks.map((framework, id) => {
              return (
                <div className={styles.framework} key={id}>
                  <div className={styles.frameworkImg}>
                    <img src={getImageUrl(framework.imageSrc)} alt={framework.title} />
                  </div>
                  <p>{framework.title}</p>
                </div>
              )
            })
          }
        </div>
        <ul className={styles.experiences}>
            {
              experience.map((company, id) => {
                return (
                  <li className={styles.experience} key={id}>
                    <img className={styles.experienceImg} src={getImageUrl(company.imageSrc)} alt={`${company.organisation} Logo`} />
                    <div className={styles.experienceInfo}>
                      <h3>{`${company.role} at ${company.organisation}`}</h3>
                      <p>{`${company.startDate} - ${company.endDate}`}</p>
                      <ul>
                        {company.experiences.map((work, id) => {
                          return <li key={id}>{work}</li>
                        })}
                      </ul>
                    </div>
                  </li>
                )
              })
            }
        </ul>
      </div>
    </section>
  )
};
