import React from "react"
import styles from "./TopNav.module.css"
import cageImg from '../images/cage.png';
import { observer } from "mobx-react"
import { NavLink, withRouter } from "react-router-dom"

class TopNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    
  }

  

  
  render() {
    const {nickStore} = this.props
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
            x {nickStore.points}
          </span>
        </div>
      </div>
    )
  }
}

export default withRouter(observer(TopNav))
