import "./App.css";
import Pentagon from "~/components/Pentagon/Pentagon";
import Head from "~/components/Head/Head";
import Rules from "~/components/Rules/Rules";
import RulesButton from "~/components/Rules/RulesButton";
import Picked from "~/components/Picked/Picked";
import { useEffect } from "react";
import useGesture from "~/utils/hooks/useGesture";

function App() {
  const { randomGesture, userGesture, dispatch, setPoint } = useGesture();

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
