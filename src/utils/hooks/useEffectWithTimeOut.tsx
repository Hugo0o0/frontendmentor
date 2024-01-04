import { useEffect } from "react";

const useEffectWithTimeOut = (
  cb: React.EffectCallback,
  timeout: number,
  dp: React.DependencyList
) => {
  useEffect(() => {
    const timeoutFunction = setTimeout(() => {
      cb();
    }, timeout);

    return () => clearTimeout(timeoutFunction);
  }, dp);
};

export default useEffectWithTimeOut;
