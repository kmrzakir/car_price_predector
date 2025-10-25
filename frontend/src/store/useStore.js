import { create } from "zustand";

const useInputErrorStore = create((set) => ({
  yearInput: "",
  kmsDrivenInput: "",
  setYearInput: (yearError) => set({ yearInput: yearError }),
  setKmsDrivenInput: (kmsDrivenError) =>
    set({ kmsDrivenInput: kmsDrivenError }),
}));

export default useInputErrorStore;
