// import { useStore } from "zustand";
import useInputErrorStore from "../../store/useStore";

export default function validateFormData({ year, kms_driven }) {
  const { setYearInput, setKmsDrivenInput } = useInputErrorStore.getState();
  const currentYear = new Date().getFullYear();

  setYearInput("");
  setKmsDrivenInput("");

  if (!/^\d+$/.test(year) || year < 1900 || year > currentYear) {
    year == "" ? setYearInput("Enter the year") : setYearInput("Invalid Input");
    return "Invalid year";
  }
  if (!/^\d+$/.test(kms_driven) || kms_driven < 0) {
    kms_driven == ""
      ? setKmsDrivenInput("Enter kms_driven")
      : setKmsDrivenInput("Invalid KMs driven");
    return "Invalid KMs driven";
  }

  return null; // means validation passed
}
