import "./App.css";
import AppRoutes from "./pages/AppRoutes";
import useFetcher from "./hooks/useFetcher";
import useSetDay from "./hooks/initialising/useSetDay";
import { useAppSelector } from "./redux/hooks";

function App() {
  const {theme} = useAppSelector(state=>state.global)
  useFetcher();
  useSetDay();
  return (
    <div data-theme={theme}>
      <AppRoutes />
    </div>
  );
}

export default App;
