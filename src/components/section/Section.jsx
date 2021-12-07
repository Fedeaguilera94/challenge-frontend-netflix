import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Section.css";
import Slider from "react-slick";

export default function Section({ url, title }) {
  const [movie, setMovie] = useState([]);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} prueba`}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7e7e7e4a",
          height: "40%",
          width: "25px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7e7e7e4a",
          height: "40%",
          width: "25px",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
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
    <div>
      <h3 className="title">{title}</h3>
      <Slider {...settings}>
        {movie.map((m) => (
          <img
            className="movie_img"
            src={`${img_url}${m.poster_path}`}
            alt={m.name}
          />
        ))}
      </Slider>
    </div>
  );
}
