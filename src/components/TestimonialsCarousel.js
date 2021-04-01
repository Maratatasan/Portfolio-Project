import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
    /*show thumbs removed the little images from bottom
    showStatus are page numbers in top left corner*/
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6000}
    >
      <div className="avatar-div">
        <img src={avatar1} alt="John Doe 1" />
        <div className="myCarousel">
          <h3>John Doe 1</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aperiam consectetur voluptatem debitis repellendus
            neque pariatur expedita iste? Facere, inventore?
          </p>
        </div>
      </div>
      <div className="avatar-div">
        <img src={avatar2} alt="Jane Doe 2" />
        <div className="myCarousel">
          <h3>Jane Doe 2</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aperiam consectetur voluptatem debitis repellendus
            neque pariatur expedita iste? Facere, inventore?
          </p>
        </div>
      </div>
      <div className="avatar-div">
        <img src={avatar3} alt="John Doe 3" />
        <div className="myCarousel">
          <h3>John Doe 3</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aperiam consectetur voluptatem debitis repellendus
            neque pariatur expedita iste? Facere, inventore?
          </p>
        </div>
      </div>
      <div className="avatar-div">
        <img src={avatar4} alt="John Doe 4" />
        <div className="myCarousel">
          <h3>John Doe 4</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aperiam consectetur voluptatem debitis repellendus
            neque pariatur expedita iste? Facere, inventore?
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default TestimonialsCarousel;
