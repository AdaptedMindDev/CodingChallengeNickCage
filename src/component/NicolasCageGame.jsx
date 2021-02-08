import React from "react"
import styles from "./NicolasCageGame.module.css"


class NicolasCageGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      positionX: 0,
      positionY: 0
    }

    this.earnReward = this.earnReward.bind(this)
    this.setNewNickPosition = this.setNewNickPosition.bind(this)
  }

  componentDidUpdate() {
    this.setNewNickPosition()
  }

  earnReward(){
    const {nickStore} = this.props
    nickStore.addPoints()
    this.setNewNickPosition()
  }

  setNewNickPosition(){
    const x = Math.floor(Math.random() * 100); 
    const y = Math.floor(Math.random() * 100); 
    this.setState({ positionX: x, positionY: y })
  }

  
  render() {
  
    const {nickStore} = this.props
    const {positionX,  positionY} = this.state
    const nick = nickStore.nick
    return (
      <div className={styles.wrapper}>
        <h3>Click Nick!</h3>
        <div className={styles.boundingBox}>
          <div className={styles.clickPoint} style={{
              left: positionX,
              top: positionY,
            }} onClick={this.earnReward}>
            <img src={nick.image} className={styles.nickImage} alt={nick.name} />
          </div>
        </div>
      </div>
    )
  }
}

export default NicolasCageGame
