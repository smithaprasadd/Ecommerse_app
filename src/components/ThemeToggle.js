import React, { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  function toggle() {
    setDark(!dark);
    document.body.style.background = dark ? "white" : "#0f172a";
  }

  return <button onClick={toggle}>{dark ? "Light Mode" : "Dark Mode"}</button>;
}
