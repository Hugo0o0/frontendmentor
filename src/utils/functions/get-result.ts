export const getResult = (randomGesture: any, userGesture: any) => {
  if (!randomGesture || !userGesture) return "WAITING...";

  if (randomGesture.index === userGesture.index) {
    return "DRAW";
  }

  if (randomGesture.beats.includes(userGesture.index)) {
    return "YOU LOSE";
  } else {
    return "WIN";
  }
};
