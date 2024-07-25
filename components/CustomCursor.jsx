import React, { useEffect, useRef, useCallback, useState } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";

const Cursor = ({ theme }) => {
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);
  const router = useRouter();
  const [isTouch, setIsTouch] = useState(false);

  const onMouseMove = useCallback(
    (e) => {
      if (isTouch) return;
      const { clientX, clientY } = e;
      const cursorX = clientX - cursorRef.current.offsetWidth / 2;
      const cursorY = clientY - cursorRef.current.offsetHeight / 2;
      gsap.to(cursorRef.current, {
        x: cursorX,
        y: cursorY,
        duration: 0.1,
      });
    },
    [isTouch]
  );

  const onMouseEnterLink = useCallback(
    (event) => {
      if (isTouch) return;
      const link = event.target;
      if (link.classList.contains("view")) {
        gsap.to(cursorRef.current, { scale: 4 });
        gsap.to(cursorTextRef.current, { opacity: 1, duration: 0.2 });
      } else {
        gsap.to(cursorRef.current, { scale: 4 });
      }
    },
    [isTouch]
  );

  const onMouseLeaveLink = useCallback(() => {
    if (isTouch) return;
    gsap.to(cursorRef.current, { scale: 1 });
    gsap.to(cursorTextRef.current, { opacity: 0, duration: 0.2 });
  }, [isTouch]);

  const resetCursorSize = useCallback(() => {
    if (isTouch) return;
    gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
    gsap.to(cursorTextRef.current, { opacity: 0, duration: 0.2 });
  }, [isTouch]);

  const initializeCursor = useCallback(() => {
    if (isTouch) return;
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, [onMouseEnterLink, onMouseLeaveLink, isTouch]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const touchQuery = window.matchMedia("(pointer: coarse)");
    setIsTouch(touchQuery.matches);

    const handleTouchChange = (e) => setIsTouch(e.matches);
    touchQuery.addListener(handleTouchChange);

    if (!touchQuery.matches) {
      document.body.style.cursor = "none";
      document.addEventListener("mousemove", onMouseMove);

      const cleanup = initializeCursor();

      router.events.on("routeChangeStart", resetCursorSize);
      router.events.on("routeChangeComplete", initializeCursor);

      return () => {
        document.body.style.cursor = "auto";
        document.removeEventListener("mousemove", onMouseMove);
        cleanup();
        router.events.off("routeChangeStart", resetCursorSize);
        router.events.off("routeChangeComplete", initializeCursor);
        touchQuery.removeListener(handleTouchChange);
      };
    }

    return () => {
      touchQuery.removeListener(handleTouchChange);
    };
  }, [onMouseMove, initializeCursor, resetCursorSize, router.events, isTouch]);

  if (isTouch) return null;

  return (
    <div
      id="custom-cursor"
      className="custom-cursor"
      ref={cursorRef}
      style={{
        backgroundColor: theme === "light" ? "black" : "white",
        top: 0,
        left: 0,
        pointerEvents: "none",
        position: "fixed",
        width: "27px",
        height: "27px",
        borderRadius: "50%",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
        display: typeof window === "undefined" ? "none" : "flex",
      }}
    >
      <span
        className="cursor-text"
        ref={cursorTextRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: theme === "light" ? "white" : "black",
          opacity: 0,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        view
      </span>
    </div>
  );
};

export default Cursor;
