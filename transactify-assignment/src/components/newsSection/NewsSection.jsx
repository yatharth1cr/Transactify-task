import React from "react";
import "./NewsSection.css";
import mainNews from "../../assets/news-main.jpg";
import news1 from "../../assets/news-1.jpg";
import news2 from "../../assets/news-2.jpg";

const newsList = [
  {
    date: "29 Aug, 2023",
    title:
      "Prime Minister Kassim Majaliwa Strengthens Bilateral Ties During Official Visit to Africab Group",
    image: mainNews,
    main: true,
  },
  {
    date: "29 Aug, 2023",
    title:
      "Prime Minister Kassim Majaliwa Strengthens Bilateral Ties During Official Visit to Africab Group",
    image: news1,
  },
  {
    date: "29 Aug, 2023",
    title:
      "Prime Minister Kassim Majaliwa Strengthens Bilateral Ties During Official Visit to Africab Group",
    image: news2,
  },
];

export default function NewsSection() {
  return (
    <section className="news-section container my-5">
      <h2 className="fw-bold mb-3">
        <span className="text-muted">what’s new</span>
        <br />
        news, announcements <br /> and press releases.
      </h2>
      <div className="row">
        <div className="col-lg-8">
          <div className="news-main">
            <img src={newsList[0].image} alt="Main News" />
            <div className="news-date">{newsList[0].date}</div>
            <h5 className="mt-2 fw-bold">{newsList[0].title}</h5>
          </div>
        </div>
        <div className="col-lg-4 d-flex flex-column gap-3">
          {newsList.slice(1).map((item, idx) => (
            <div className="news-item d-flex" key={idx}>
              <img
                src={item.image}
                alt={`news-${idx}`}
                className="img-fluid w-50"
              />
              <div className="ps-3 d-flex flex-column justify-content-center">
                <div className="news-date">{item.date}</div>
                <p className="fw-medium small mb-0">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
