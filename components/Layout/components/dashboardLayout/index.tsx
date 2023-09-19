import { useEffect } from "react";
import styles from "./styles.module.css";
import { gsap } from "gsap";
import { useRef } from "react";
import { Flip } from "gsap/dist/Flip";
import FlipState from "gsap/dist/Flip";
import { toArray } from "gsap/all";

declare module "gsap/dist/Flip" {
  export interface FlipState {
    isTweening: boolean;
  }
}

export default function DashboardLayout() {
  //   gsap.registerPlugin(Flip);

  const cardsRefs: any = useRef([]);

  useEffect(() => {
    if (cardsRefs.current)
      cardsRefs.current.forEach((card: any, index: any) => {
        card.addEventListener("click", () => {
          //Get State
          // const state = Flip.getState(cardsRefs.current);
          let state: FlipState;
          if (Flip.isTweening(cardsRefs.current)) {
            state = Flip.getState(cardsRefs.current);
          } else {
            state = {
              elementStates: cardsRefs.current.map((element: any) => ({
                element,
                props: { y: 0, opacity: 1 },
                id: element.getAttribute("data-id"),
              })),
            };
          }

          //Add the active class to the clicked one and add inactive to others
          const isCardActive = card.classList.contains("active");
          if (cardsRefs.current)
            cardsRefs.current.forEach((otherCard: any, otherIndex: any) => {
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
        <div ref={(el) => (cardsRefs.current[0] = el)} className={styles.card}>
          <h1>Awesome sauce</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            necessitatibus minima et voluptate sapiente quos, neque odit
            distinctio excepturi voluptatibus.
          </p>
        </div>
        <div ref={(el) => (cardsRefs.current[1] = el)} className={styles.card}>
          <h1>Pretty card</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            necessitatibus minima et voluptate sapiente quos, neque odit
            distinctio excepturi voluptatibus.
          </p>
        </div>
        <div ref={(el) => (cardsRefs.current[2] = el)} className={styles.card}>
          <h1>Animation</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            necessitatibus minima et voluptate sapiente quos, neque odit
            distinctio excepturi voluptatibus.
          </p>
        </div>
        <div ref={(el) => (cardsRefs.current[3] = el)} className={styles.card}>
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
