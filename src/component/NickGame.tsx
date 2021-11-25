
import {rootStore} from "./RootStore"
import React, {useEffect} from "react";
import styles from "./NickGame.module.css";


export const NickGame: React.FC = () => {
  const { nickStore } = rootStore;

  let positionX = 0;
  let positionY = 0;
  

  const earnReward = () => {
    nickStore.addPoints(7)
    positionX = Math.floor(Math.random() * 100); 
    positionY = Math.floor(Math.random() * 100);
  }


  
  const nick = nickStore.nick
  return (
    <div className={styles.wrapper}>
      <h3>Click Nick!</h3>
      <div className={styles.boundingBox}>
        <div className={styles.clickPoint} style={{
            left: positionX,
            top: positionY,
          }} onClick={() => earnReward()}>
          <img src={nick.image} className={styles.nickImage} alt={nick.name} />
        </div>
      </div>
    </div>
  )
}


