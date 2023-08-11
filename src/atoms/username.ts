import { AtomEffect, atom } from "recoil";

// const localStorageEffect = (key: string):AtomEffect<any> => ({setSelf, onSet}) => {
//   const savedValue = localStorage.getItem(key)
//   if (savedValue != null) {
//     setSelf(JSON.parse(savedValue));
//   }
//   onSet((newValue, _, isReset) => {
//     isReset
//       ? localStorage.removeItem(key)
//       : localStorage.setItem(key, JSON.stringify(newValue));
//   });
// };

/**
 * The user's username
 */
export const usernameAtom = atom<string>({
  key: "usernameAtom",
  default: "JoshWannaPaas",
  // effects: [ localStorageEffect("usernameAtom") ]
});
