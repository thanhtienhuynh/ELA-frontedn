import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CardCourse from './CardCourse';
const OwlCarouselBar = (props) => {
    const OwlBar = props.properties.map((property) => {
        return <div className="item" key={property._id}><CardCourse property={property}/></div>
    })
    return (
        <OwlCarousel
            className="owl-theme"
            loop
            items={5}
            margin={15}
            autoplay={true}
            autoplayTimeout={2000}
            autoplayHoverPause={true}
            dots={false}
        >
            {OwlBar}
        </OwlCarousel>
        
    );
}

export default OwlCarouselBar;