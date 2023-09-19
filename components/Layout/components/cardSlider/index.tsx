import Slider from "react-slick";
import styles from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// var cards = [
//   {
//     image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
//     title: "Burgundy Flemming",
//     subtitle: "Advertising",
//   },
//   {
//     image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
//     title: "Nigel Nigel",
//     subtitle: "Sound & Vision",
//   },
//   {
//     image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
//     title: "Caspian Bellevedere",
//     subtitle: "Accounting",
//   },
//   {
//     image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
//     title: "Burgundy Flemming",
//     subtitle: "Advertising",
//   },
// ];

function News({ data }: { data: any }) {
  console.log(data, "linia 44");

  return (
    // <div className={styles.news}>
    <Slider {...settings}>
      {data.map((item: any, index: any) => {
        return (
          <div key={index}>
            <Article data={item} />
          </div>
        );
      })}
    </Slider>
    // {/* {newsTemplate} */}
    // <strong className={"news__count " + (data.length > 0 ? "" : "none")}>
    //   Total cards: {data.length}
    // </strong>
    // </div>
  );
}

function Article({ data }: { data: any }) {
  // console.log(data, "article");

  const transform = (categorie: any) => {
    if (categorie === "art") return "Arta";
    else if (categorie === "colective_sports") return "Sport colectiv";
    else if (categorie === "individual_sports") return "Sport individual";
    else if (categorie === "escape_room") return "Escape Room";
    else if (categorie === "malls") return "Mall";
    else if (categorie === "monumets") return "Monumente";
    else if (categorie === "museum") return "Muzeu";
    else if (categorie === "parks") return "Parcuri";
    else if (categorie === "relax_activities") return "Activitati de relaxare";
    else if (categorie === "religion") return "Religie";
    else if (categorie === "shows") return "Show-uri";
    else if (categorie === "sights") return "In trecere";
    else if (categorie === "walks") return "Plimbari usoare";
    
    return categorie;
  };

  return (
    <figure className={styles.snip1584}>
      <img src={data.img} style={{ width: "20vw", height: "18vw" }} />
      <figcaption>
        <h3>{data.nume}</h3>
        <h5>{transform(data.categorie_mica)}</h5>
      </figcaption>
      {/* <a href="#"></a> */}
    </figure>
  );
}

export default function CardSlider({ objectives }: { objectives: any }) {
  return (
    <div style={{ width: "53vw", paddingLeft: '2vh' }}>
      {/* <h3>Cards</h3> */}
      <Slider {...settings}>
        {objectives.map((item: any, index: any) => {
          return (
            <div key={index}>
              <Article data={item} />
            </div>
          );
        })}
      </Slider>
      <strong
        className={"news__count " + (objectives.length > 0 ? "" : "none")}
      >
        Numar total de obiective: {objectives.length}
      </strong>
    </div>
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};
