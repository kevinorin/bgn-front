import React from "react";
import Slider from "react-slick";
import MediaControlCard from "../MediaControlCard";
// Import Swiper styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@material-ui/core";

export default function MusicCards() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Container maxWidth="md">
      <Slider {...settings}>
        <div>
          <MediaControlCard />
        </div>
        <div>
          <MediaControlCard />
        </div>
        <div>
          <MediaControlCard />
        </div>
        <div>
          <MediaControlCard />
        </div>
        <div>
          <MediaControlCard />
        </div>
        <div>
          <MediaControlCard />
        </div>
      </Slider>
    </Container>
  );
}