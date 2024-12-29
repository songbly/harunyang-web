import { atom } from "jotai";

export const themeModeAtom = atom<"light" | "dark" | "transparent">("dark");
