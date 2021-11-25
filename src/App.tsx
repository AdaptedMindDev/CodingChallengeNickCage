
import './App.css';
import {TopNav} from "./component/TopNav"
import {ChooseNick} from "./component/ChooseNick/ChooseNick"
import React from "react"
import {NickGame} from "./component/NickGame"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {rootStore} from "./component/RootStore"



const App: React.FC = () => {
  
  return (
    <Router>
      <div id="TopSection">
        <TopNav />
      </div>
      <div id="BottomSection">
        <Routes>
          <Route path="/play" element={<NickGame/>} />
          <Route path="/" element={<ChooseNick/>} />
        </Routes>
      </div>
    </Router>
  )
};

export default App;
