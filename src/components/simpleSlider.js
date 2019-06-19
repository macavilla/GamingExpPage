import React, { Component } from "react"
import { Link } from "gatsby"
import Slider from "react-slick"

//slider home mobile
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      className: "links-wrapper",
      arrows: false,
      centerMode: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div>
        <Slider {...settings}>
          <div class="item">
            <div className="link casual">
              <Link to="/casual/">casual</Link>
            </div>
          </div>
          <div class="item">
            <div className="link competitivo">
              <Link to="/competitivo/">competitivo</Link>
            </div>
          </div>
          <div class="item">
            <div className="link extremo">
              <Link to="/extremo/">extremo</Link>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}
