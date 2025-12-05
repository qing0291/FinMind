import { createMMKV } from "react-native-mmkv";
import { StateStorage } from "zustand/middleware";

//Create MMKV Storage Instance
const storage = createMMKV();

//Zustand adapter for persist()
export const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: (name) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return storage.remove(name);
  },
};
