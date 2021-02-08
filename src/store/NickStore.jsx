import { makeAutoObservable } from "mobx"

class NickStore {
  // things like window size, url params, browser history, and other browser wide (non-database) things
  constructor() {
    this.allNicks = [
      {"id": 1, "name": "normal nick", "image":"nick1.png", "points": 10},
      {"id": 2, "name": "cool nick", "image":"nick2.png", "points": 7},
      {"id": 3, "name": "crazy nick", "image":"nick3.jpg", "points": 8}
    ]

    this.nick = this.allNicks[0]
    this.points = 0
    makeAutoObservable(this)

    this.chooseNick = this.chooseNick.bind(this)
    this.addPoints = this.addPoints.bind(this)
  }

  chooseNick(nick) {
    this.nick = nick;
  }

  addPoints(){
    this.points += this.nick.points
  }
}

export default NickStore
