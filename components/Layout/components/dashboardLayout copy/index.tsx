import { useEffect } from "react";
import styles from "./styles.module.css";
import { gsap } from "gsap";
import { useRef } from "react";
import { Flip } from "gsap/dist/Flip";

export default function DashboardLayout() {
  //   gsap.registerPlugin(Flip);

  const cardsRef: any = useRef(null);

  useEffect(() => {
    // const cards = document.querySelectorAll(".card");
    // console.log(cards)

    if (cardsRef.current)
      cardsRef.current.forEach((card: any, index: any) => {
        card.addEventListener("click", () => {
          //Get State
          const state = Flip.getState(cardsRef.current);

          //Add the active class to the clicked one and add inactive to others
          const isCardActive = card.classList.contains("active");
          if (cardsRef.current)
            cardsRef.current.forEach((otherCard: any, otherIndex: any) => {
              otherCard.classList.remove("active");
              otherCard.classList.remove("is-inactive");
              if (!isCardActive && index !== otherIndex)
                otherCard.classList.add("is-inactive");
            });
          if (!isCardActive) card.classList.add("active");

          Flip.from(state, {
            duration: 1,
            ease: "expo.out",
            absolute: true,
          });
        });
      });
  });

  return (
    <>
      <section className={styles.section}>
        <div ref={cardsRef} className={styles.card}>
          <h1>Awesome sauce</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            necessitatibus minima et voluptate sapiente quos, neque odit
            distinctio excepturi voluptatibus.
          </p>
        </div>
        <div ref={cardsRef} className={styles.card}>
          <h1>Pretty card</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            necessitatibus minima et voluptate sapiente quos, neque odit
            distinctio excepturi voluptatibus.
          </p>
        </div>
        <div ref={cardsRef} className={styles.card}>
          <h1>Animation</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            necessitatibus minima et voluptate sapiente quos, neque odit
            distinctio excepturi voluptatibus.
          </p>
        </div>
        <div ref={cardsRef} className={styles.card}>
          <h1>Crazy stuff</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            necessitatibus minima et voluptate sapiente quos, neque odit
            distinctio excepturi voluptatibus.
          </p>
        </div>
      </section>
    </>
  );
}
