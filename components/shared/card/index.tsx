import { useEffect, useState } from "react";

export default function Card({item}: any) {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {},[isActive])
  return (
    <div className={isActive ? `styles.card active` : `styles.card is-inactive`} onClick={() => {setIsActive(!isActive)}}>
      <h1>{item.title}</h1>
      <p> {item.text} </p>
    </div>
  );
}
