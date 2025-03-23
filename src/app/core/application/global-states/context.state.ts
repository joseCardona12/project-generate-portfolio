import { create } from "zustand";
import {
  IFormContext,
  initialFormContext,
} from "../interfaces/formContext.interface";

interface IContextState {
  context: IFormContext;
  setContext: (value: IFormContext) => void;
}

export const useContextState = create<IContextState>((set) => ({
  context: initialFormContext,
  setContext: (value) => set((state) => ({ ...state, context: value })),
}));
