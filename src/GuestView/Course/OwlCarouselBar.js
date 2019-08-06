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
            items={4}
            margin={10}
            nav
        >
            {OwlBar}
        </OwlCarousel>
        
    );
}

export default OwlCarouselBar;