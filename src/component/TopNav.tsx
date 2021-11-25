
import {rootStore} from "./RootStore"
import React, {useEffect} from "react";
import styles from "./TopNav.module.css"
import cageImg from '../images/cage.png';
import { observer } from "mobx-react"
import { NavLink } from "react-router-dom"


export const TopNav: React.FC = observer(() => {
  const { nickStore } = rootStore;

  
  return (
    <div className={styles.topNavArea}>
      <div className={styles.title}>
        Caging Nicolas Cage
        <nav>
          <ul>
            <li>
              <NavLink to="/">Choose</NavLink>
            </li>
            <li>
              <NavLink to="/play">Play</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className={styles.cageArea}>
        <img src={cageImg} className={styles.cageImage} alt="nickcage" />
        <span className={styles.pointCount}>
          x {nickStore.nick.points}
        </span>
      </div>
    </div>
  )}
);


