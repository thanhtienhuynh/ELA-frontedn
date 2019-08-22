import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CardLecture from './CardLecture';
const OwlCarouselLecture = ({properties}) => {
    const OwlBar = properties.map((property) => {
        return <div className="item" key={property.id}><CardLecture property={property}/></div>
    })
    return (
        <OwlCarousel
            className="owl-theme"
            loop
            items={3}
            margin={15}
            autoplay={true}
            autoplayTimeout={2000}
            autoplayHoverPause={true}
            dots={false}
            style={{'textAlign': 'center'}}
        >
            {OwlBar}
        </OwlCarousel>
        
    );
}

export default OwlCarouselLecture;