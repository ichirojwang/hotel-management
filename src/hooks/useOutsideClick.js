import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (!ref.current) return;
      if (ref.current.contains(e.target)) return;
      handler();
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () => document.removeEventListener("click", handleClick);
  }, [handler, listenCapturing]);

  return { ref };
}

export default useOutsideClick;
