import "./App.css";
import AppRoutes from "./pages/AppRoutes";
import useFetcher from "./hooks/useFetcher";
import useSetDay from "./hooks/initialising/useSetDay";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { changeTheme } from "./redux/global/global";
import { useEffect } from "react";
import useAppInit from "./hooks/initialising/useAppInit";

function App() {
  const { theme } = useAppSelector((state) => state.global);
  useAppInit()
  return (
    <div data-theme={theme} className={theme}>
      <AppRoutes />
    </div>
  );
}

export default App;
