import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Section.css";
export default function Section({ url, title }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function Getdata() {
      const response = await (await axios.get(url)).data.results;
      setMovie(response);
    }
    Getdata();
  }, []);

  console.log(title, movie);
  const img_url = "https://image.tmdb.org/t/p/original";

  return (
    <div className="section_row">
      <h3 className="title">{title}</h3>
      <div className="section_img">
        {movie.map((m) => (
          <img
            className="movie_img"
            src={`${img_url}${m.backdrop_path}`}
            alt={m.name}
          />
        ))}
      </div>
    </div>
  );
}
