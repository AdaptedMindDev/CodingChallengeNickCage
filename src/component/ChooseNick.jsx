import React from "react"
import styles from "./ChooseNick.module.css"


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.chooseNick = this.chooseNick.bind(this)
  }

  chooseNick(nick) {
    const {nickStore} = this.props 
    nickStore.chooseNick(nick)
  }

  
  render() {
    const {nickStore} = this.props 
    const nickChoiceHtml = []
    nickStore.allNicks.forEach((nick) => {
      nickChoiceHtml.push(
        <div key={nick.id} className={styles.nickChoice} onClick={this.chooseNick(nick)}>
          <img src={nick.image} className={styles.nickImage} alt={nick.name} />
          <div>
            {nick.name}
            <span className={styles.choosen}>✅</span>
          </div>

        </div>
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
}

export default Home
