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
        <p className="page-header">אחי אתה לא מחובר אנא פנה הלעמוד לוגין והתחבר
        </p>
        <button onClick={handelSbmit}>לעמוד לוגין</button>
      </div>
    </>
  );
}
