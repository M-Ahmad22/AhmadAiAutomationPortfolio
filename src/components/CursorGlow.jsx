import { useEffect, useState } from "react";

// Subtle cursor-following glow layer for premium ambient feel.
// Hidden on touch devices.
export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(320px circle at ${pos.x}px ${pos.y}px, rgba(242,133,0,0.10), transparent 60%)`,
        transition: "background 120ms linear",
      }}
    />
  );
}
