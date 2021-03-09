import AppState from "./context/AppState";
import Main from "./components/Main/Main";
const App = () => {
  return (
    <AppState>
      <Main />
    </AppState>
  );
};

export default App;
