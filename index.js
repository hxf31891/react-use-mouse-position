import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    mouseX: null,
    mouseY: null
  });

  const updateMousePosition = ev => {
    setMousePosition({ mouseX: ev.clientX, mouseY: ev.clientY });
  };

  const updateTouchPosition = ev => {
    let touches = ev.changedTouches || [];
    if (touches.length > 0) {
      let touch = touches[0];
      setMousePosition({ mouseX: touch.clientX, mouseY: touch.clientY });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("touchstart", updateTouchPosition);
    window.addEventListener("touchmove", updateTouchPosition);
    window.addEventListener("touchend", updateTouchPosition);
    window.addEventListener("touchcancel", updateTouchPosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("touchstart", updateTouchPosition);
      window.removeEventListener("touchmove", updateTouchPosition);
      window.removeEventListener("touchend", updateTouchPosition);
      window.removeEventListener("touchcancel", updateTouchPosition);
    };
  }, []);

  return mousePosition;
};

export { useMousePosition };
