
import {rootStore} from "../RootStore"
import React from "react";
import styles from "./ChooseNick.module.css";
import {NickChoose} from "./NickChoose";


export const ChooseNick: React.FC = () => {
  const { nickStore } = rootStore;

 
  const nickChoiceHtml = [] as Array<any>;;
  
  nickStore.allNicks.forEach((nick) => {
    nickChoiceHtml.push(
      <NickChoose nick={nick} onChoose={nickStore.chooseNick} />
    )
  })

  return (
    <div className={styles.wrapper}>
      <h3>Choose your Nick</h3>
      <div className={styles.chooseNickArea}>
        {nickChoiceHtml}
      </div>
      
    </div>
  )
}


