import { nickStore, NickStore } from "./NickStore";

export type RootStore = {
  nickStore: NickStore;
};

export const rootStore = {
  nickStore: nickStore(),
} as RootStore;

