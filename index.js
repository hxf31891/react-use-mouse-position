import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    mouseX: null,
    mouseY: null
  });

  const updateMousePosition = ev => {
    setMousePosition({ mouseX: ev.clientX, mouseY: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("touchstart", updateMousePosition);
    window.addEventListener("touchmove", updateMousePosition);
    window.addEventListener("touchend", updateMousePosition);
    window.addEventListener("touchcancel", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("touchstart", updateMousePosition);
      window.removeEventListener("touchmove", updateMousePosition);
      window.removeEventListener("touchend", updateMousePosition);
      window.removeEventListener("touchcancel", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export { useMousePosition };
