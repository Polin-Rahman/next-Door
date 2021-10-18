import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Header.css';

import bn1 from '../../images/topBanner/banner1.jpg';
import bn2 from '../../images/topBanner/banner5.jpg';
import bn3 from '../../images/topBanner/banner7.jpg';

const Header = () => {
    return (
        <div>
            <Carousel className="carouselCustom">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bn2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="fs-1 fw-bold text-dark">next Door - a Telemedicine service</h3>
                        <h5 className="text-dark fst-italic">Consult a doctor in case of any health problem through video or voice call at home. Call to make an appointment or ask any questions.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bn1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="fs-1 fw-bold text-dark">next Door - a Telemedicine service</h3>
                        <h5 className="text-dark fst-italic">Consult a doctor in case of any health problem through video or voice call at home. Call to make an appointment or ask any questions.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bn3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="fs-1 fw-bold text-dark">next Door - a Telemedicine service</h3>
                        <h5 className="text-dark fst-italic">Consult a doctor in case of any health problem through video or voice call at home. Call to make an appointment or ask any questions.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Header;