import { makeAutoObservable } from "mobx";

export type NickStore = {
  allNicks: Array<any>,
  points: number,
  addPoints: (points: any) => void,
  nick: any,
  chooseNick: (nick: any) => void
};

export const nickStore = (): NickStore => {
  const store = makeAutoObservable({
    allNicks: [
      {"id": 1, "name": "local normal nick", "image":"nick1.png", "points": 10},
      {"id": 2, "name": "local cool nick", "image":"nick2.png", "points": 7},
      {"id": 3, "name": "local crazy nick", "image":"nick3.jpg", "points": 8}
    ],

    points: 0,
    nick: {"id": 1, "name": "normal nick", "image":"nick1.png", "points": 10},
    addPoints: (points: any) => {
      store.nick.points += points;
    },
    chooseNick: (nick: any) => {
      store.nick = nick;
    }
  });

  return store;
};
