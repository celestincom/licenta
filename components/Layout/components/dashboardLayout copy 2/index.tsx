import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { gsap } from "gsap";
import { useRef } from "react";
import { Flip } from "gsap/dist/Flip";
import { toArray } from "gsap/all";
import Card from "@/components/shared/card";

export default function DashboardLayout() {
  //   gsap.registerPlugin(Flip);

  const cardsRefs: any = useRef([]);

  const [isActive, setIsActive] = useState([0, 0, 0, 0]);

  // useEffect(() => {
  //   const state = Flip.getState(cardsRefs.current);

  //   Flip.from(state, {
  //     duration: 1,
  //     ease: "expo.out",
  //     absolute: true,
  //   });
  // }, [isActive]);

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  function toggleValueAtIndex(index: number) {
    if (isActive[index] === 2) {
      setIsActive([0, 0, 0, 0]);
    }

    if (isActive[index] !== 2) {
      setIsActive((prevState) => {
        const newState = [...prevState];
        newState.forEach((item, indexNewState) => {
          if (indexNewState !== index) {
            newState[indexNewState] = 1;
          }
        });
        newState[index] = 2;
        return newState;
      });
    }

    // Adaugă animația cu GSAP
    gsap.to(cardsRefs.current[index], {
      y: isActive[index] === 2 ? 0 : 20, // Modifică valoarea 100 pentru a ajusta înălțimea la care se va deplasa div-ul
      duration: 1, // Modifică durata la valoarea dorită (exprimată în secunde)
      ease: "power2.out", // Modifică easing-ul la valoarea dorită (vezi documentația GSAP pentru mai multe opțiuni)
    });
  }

  return (
    <>
      <section className={styles.section}>
        {data.map((item, index) => {
          return (
            <div
              ref={(el) => (cardsRefs.current[index] = el)}
              className={
                isActive[index] === 0
                  ? `${styles.card}`
                  : isActive[index] === 1
                  ? `${styles.card} ${styles.isInactive}`
                  : `${styles.card} ${styles.active}`
              }
              // className={styles.card}
              onClick={() => {
                toggleValueAtIndex(index);
              }}
            >
              <h1>{item.title}</h1>
              <p style={{textAlign: 'justify'}}>{item.text}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}

const data = [
  {
    title: "Calatoria mea",
    text: "Fiind o aplicatie de calatorii, evident exista o sectiune numita Calatoria Mea, fiind defapt vorba despre ultima calatorie facuta pe aceasta aplicatie. In susul paginii, imediat sub titlu se pot observa cateva detalii despre calatorie. Mai exact vorbim despre orasul in care are loc, numarul de zile petrecute, ziua de inceput si ziua de final. Sub aceasta sectiune avem cateva imagini reprezentative pentru fiecare obiectiv ales de catre asistenul virtual si o harta langa unde putem vedea cum anume sunt asezate pe harta obiectivele. harta este una asemanatoare Google, permitand marirea si micsorarea campului vizual, click pe obiective pentru a vedea cateva detalii. Sub aceasta sectiune avem si o Scurta descriere a fiecarui obiectiv in parte. Aceasta pagina poate sa nu existe prima data cand contul a fost creat asa ca utilizatorul va fi din prima redirectionat in locul unde isi poate alege detaliile pentru a face prima calatorie.",
  },
  {
    title: "O noua calatorie",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus minima et voluptate sapiente quos, neque odit distinctio excepturi voluptatibus.",
  },
  {
    title: "Istoricul de calatorii",
    text: "Evident, vorbind despre o aplicatie de calatorii, nu vom avea de-a face cu o singura calatorie. O sectiune separata in care putem identifica toate calatoriile pe care le-a primit utilizatorul a fost conceputa. Pagina este destul de intuitiva si contine o lista de modaluri care initial au afisate Orasul, numarul de zile , ziua de inceput si cea de sfarsit. O data apasat pe acest modal, el se va extinde afisand detalii suplimentare precum numele, o scurta descriere si o imagine reprezentativa pentru fiecare obiectiv",
  },
  {
    title: "Recomandari",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus minima et voluptate sapiente quos, neque odit distinctio excepturi voluptatibus.",
  },
];
