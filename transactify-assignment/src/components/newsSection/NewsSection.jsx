import React from "react";
import "./NewsSection.css";
import mainNews from "../../assets/news-01.jpg";
import news1 from "../../assets/news-02.jpg";
import news2 from "../../assets/news-03.jpg";

const newsList = [
  {
    date: "29 Aug, 2023",
    title:
      "Prime Minister Kassim Majaliwa Strengthens Bilateral Ties During Official Visit to Africab Group",
    image: mainNews,
  },
  {
    date: "29 Aug, 2023",
    title:
      "Africab Group Launches New EV Initiative to Boost Sustainable Transportation",
    image: news1,
  },
  {
    date: "29 Aug, 2023",
    title: "Africab’s New Manufacturing Plant to Create 500+ Jobs in Tanzania",
    image: news2,
  },
];

export default function NewsSection() {
  return (
    <section className="news-wrapper container position-relative">
      <div className="welcome-bg-text">what's new</div>

      <div className="section-heading">
        <p className="mb-0 fw-bold">news, announcements</p>
        <p className="fw-bold">and press releases.</p>
      </div>

      <div className="row mt-4 gx-5">
        {/* Left - Main News */}
        <div className="col-md-6">
          <div className="main-news-card position-relative">
            <img src={newsList[0].image} alt="Main News" />
            <div className="main-news-overlay">
              <div className="news-meta">{newsList[0].date}</div>
              <h5>{newsList[0].title}</h5>
            </div>
          </div>
        </div>

        {/* Right - Small News */}
        <div className="col-md-6 d-flex flex-column gap-4">
          {newsList.slice(1).map((item, idx) => (
            <div className="small-news" key={idx}>
              <div className="small-news-image">
                <img src={item.image} alt={`news-${idx}`} />
              </div>
              <div className="small-text">
                <div className="news-meta">{item.date}</div>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
