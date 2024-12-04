import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function HomePage() {
const navegate = useNavigate()
  
  const handelSbmit = (e: React.FormEvent) => {
    e.preventDefault();

    navegate("/Login");
  };
  return (
    <>
    <h2>אתה לא מחובר אנא צור חיבור</h2>
    <button onClick={handelSbmit}>
      לעמוד לוגין
    </button>
    </>
  )
}
