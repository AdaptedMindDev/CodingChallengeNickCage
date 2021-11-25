
import {rootStore} from "../RootStore"
import React from "react";
import styles from "./ChooseNick.module.css";

type Props = {
  nick: any;
  onChoose: (nick:any) => void
};


export const NickChoose: React.FC<Props> = ({nick, onChoose}) => {
  
  return (
    <div key={nick.id} className={styles.nickChoice} onClick={() => onChoose(nick)}>
      <img src={nick.image} className={styles.nickImage} alt={nick.name} />
      <div>
        {nick.name}
        <span className={styles.choosen}>✅</span>
      </div>

    </div>
  )
}


