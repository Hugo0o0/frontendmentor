import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/state/store";
import {
  setPoint,
  setUserGesture,
  setRandomGesture,
  resetGestures,
} from "~/state/game/game-slices";

const useGesture = () => {
  const { points, randomGesture, userGesture } = useSelector(
    (state: RootState) => state.game
  );
  const dispatch = useDispatch();

  return {
    points,
    randomGesture,
    userGesture,
    dispatch,
    setPoint,
    setUserGesture,
    setRandomGesture,
    resetGestures,
  };
};

export default useGesture;
