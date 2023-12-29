import "./App.css";
import Pentagon from "~/components/Pentagon/Pentagon";
import Head from "~/components/Head/Head";
import Rules from "~/components/Rules/Rules";
import RulesButton from "~/components/Rules/RulesButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/store";
import Picked from "./components/Picked/Picked";
import { useEffect } from "react";
import { setPoint } from "./state/game/game-slices";

function App() {
  const { userGesture, randomGesture } = useSelector(
    (state: RootState) => state.game
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPoint());
  }, [randomGesture]);

  return (
    <main className="main">
      <RulesButton />
      <Rules />
      <Head />
      {!userGesture && <Pentagon />}
      {userGesture && <Picked />}
    </main>
  );
}

export default App;
