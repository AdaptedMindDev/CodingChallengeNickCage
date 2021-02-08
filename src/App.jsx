
import './App.css';
import TopNav from "./component/TopNav"
import ChooseNick from "./component/ChooseNick"
import React from "react"
import NicolasCageGame from "./component/NicolasCageGame"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NickStore from "./store/NickStore"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.nickStore = new NickStore();
    
  }

  render() {
    return (
          <Router>
            <div id="TopSection">
              <TopNav nickStore={this.nickStore}/>
            </div>
            <div id="BottomSection">
              <Switch>
                <Route path="/play" >
                  <NicolasCageGame nickStore={this.nickStore}/>
                </Route>
                <Route path="/" >
                  <ChooseNick nickStore={this.nickStore}/>
                </Route>
              </Switch>
            </div>
          </Router>
        
    );
  }
}

export default App;
