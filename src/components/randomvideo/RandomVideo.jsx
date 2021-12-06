import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RandomVideo.css";
import NavBar from "../navbar/NavBar";

export default function RandomVideo({ url }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function GetVideo() {
      const response = await (await axios.get(url)).data.results;
      setMovie(response[Math.floor(Math.random() * response.length)]);
    }
    GetVideo();
  }, []);
  return (
    <>
      <div className="nav">
        <NavBar />
      </div>
      <div className="detail_cont">
        <div className="video_image">
          <img
            className="image_detail"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
          />
        </div>
        <article className="article_info">
          <div className="info">
            <div className="movie_title">
              <h1>{movie.name}</h1>
            </div>
            <div className="movie_description">
              <p>{movie.overview}</p>
            </div>
            <div className="btn_container">
              <button className="btn_play">
                <div className="btn_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-play"
                    viewBox="0 0 16 16"
                    color="black"
                  >
                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                  </svg>
                  <span style={{ paddingLeft: "5%" }}>Playing Now</span>
                </div>
              </button>
              <button className="btn_info">
                <div className="btn_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    color="white"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                  <span style={{ paddingLeft: "5%", color: "white" }}>
                    More Info
                  </span>
                </div>
              </button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
