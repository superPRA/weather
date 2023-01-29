import  useFetcher  from "../useFetcher";
import { useAppDispatch } from "../../redux/hooks";
import useSetDay from "./useSetDay";
import { useEffect } from "react";
import { changeTheme } from "../../redux/global/global";

// this hook will run all the initializations we need for the app
export default function useAppInit() {
  const dispatch = useAppDispatch();
  useFetcher();
  useSetDay();
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => (e.matches ? "dark" : "light"));
  useEffect(() => {
    dispatch(
      changeTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      )
    );
  }, []);
}
