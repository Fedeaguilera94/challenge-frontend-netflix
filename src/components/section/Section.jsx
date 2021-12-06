import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Section.css";

export default function Section({ url, title }) {
  const [movie, setMovie] = useState([]);

  const [scrollX, setScrollX] = useState(-400);

  const handleLeftArrow = () => {
    let x = scrollX + 150;
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  useEffect(() => {
    async function Getdata() {
      const response = await (await axios.get(url)).data.results;
      setMovie(response);
    }
    Getdata();
  }, []);

  const img_url = "https://image.tmdb.org/t/p/original";

  return (
    <div className="section_row">
      <h3 className="title">{title}</h3>
      <div className="row">
        {movie.map((m) => (
          <div className="section_img">
            <img
              className="movie_img"
              /* backdrop_path || poster_path */
              src={`${img_url}${m.poster_path}`}
              alt={m.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
