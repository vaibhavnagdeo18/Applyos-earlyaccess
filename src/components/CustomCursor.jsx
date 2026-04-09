import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
      }
    };

    const onEnter = () => {
      hovering.current = true;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) {
        ringRef.current.style.width = "32px";
        ringRef.current.style.height = "32px";
        ringRef.current.style.borderColor = "rgba(240,236,228,0.6)";
      }
    };

    const onLeave = () => {
      hovering.current = false;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) {
        ringRef.current.style.width = "0px";
        ringRef.current.style.height = "0px";
        ringRef.current.style.borderColor = "transparent";
      }
    };

    let raf;
    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    animate();

    const interactives = () => document.querySelectorAll("a, button, input, .interactive");
    const addListeners = () => {
      interactives().forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#f0ece4",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "opacity 0.2s",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          borderRadius: "50%",
          border: "1px solid transparent",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
        }}
      />
    </>
  );
}
