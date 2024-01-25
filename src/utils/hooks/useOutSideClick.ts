import { useEffect } from "react";

const useOutSideClick = <T>(
  ref: React.RefObject<T>,
  listener: (event: MouseEvent) => void
) => {
  useEffect(() => {
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, listener]);
};

export default useOutSideClick;
