import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navegate = useNavigate();

  const handelSbmit = (e: React.FormEvent) => {
    e.preventDefault();

    navegate("/Login");
  };
  return (
    <>
      <div className="Home">
        <h2>אחי אתה לא מחובר</h2>
        <button onClick={handelSbmit}>לעמוד לוגין</button>
      </div>
    </>
  );
}
