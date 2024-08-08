import { type RefObject, useEffect } from "react";

export default function useOnOutsideClicked(ref: RefObject<HTMLElement>, fn: () => void) {
  useEffect(() => {
    function handleOutsideClicked(e: any) {
      if (ref.current && !ref.current.contains(e.target)) fn();
    }

    document.addEventListener("mousedown", handleOutsideClicked);
    return () =>
      document.removeEventListener("mousedown", handleOutsideClicked);
  }, [ref]);
}
