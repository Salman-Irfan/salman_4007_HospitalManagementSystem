import React from 'react'
import { useRef, useState } from "react";
import ibrahim from '../assets/images/ibrahim.png'
import ahmad from '../assets/images/ahmad.png'
import logo from '../assets/images/logo.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../css/swiperEffectOverflow.css"

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Home = () => {
    return (
        <>
            <div class="container my-4">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card bg-dark text-success ">
                            <img className="card-img" src={logo} alt="Card image" />
                            <div className="card-img-overlay ">
                                <h5 className="card-title text-white bg-success">Ibrahim, Afzal Clinic</h5>
                                <ul>
                                    <li>
                                        <p className="lead">
                                            Consultant Psychiatrist (UK) online clinic
                                        </p>
                                    </li>
                                    <li>
                                        <p className="lead">
                                            General Practice clinic
                                        </p>
                                    </li>
                                    <li>
                                        <p className="lead">
                                            We Provide high standard evidence based clinical treatments
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row featurette d-flex justify-content-center align-items-center">
                            <div className="col-md-7 order-md-2">
                                <h2 className="featurette-heading fw-normal lh-1">Ibrahim, Afzal Clinic </h2>
                                <ul>
                                    <li>
                                        <p className="lead">
                                            Consultant Psychiatrist (UK) online clinic
                                        </p>
                                    </li>
                                    <li>
                                        <p className="lead">
                                            General Practice clinic
                                        </p>
                                    </li>
                                    <li>
                                        <p className="lead">
                                            We Provide high standard evidence based clinical treatments
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-5 order-md-1">
                                <img src={ibrahim} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row featurette d-flex justify-content-center align-items-center">
                            <div className="col-md-7 order-md-2">
                                <h2 className="featurette-heading fw-normal lh-1">Ibrahim, Afzal Clinic </h2>
                                <ul>
                                    <li>
                                        <p className="lead">
                                            Consultant Psychiatrist (UK) online clinic
                                        </p>
                                    </li>
                                    <li>
                                        <p className="lead">
                                            General Practice clinic
                                        </p>
                                    </li>
                                    <li>
                                        <p className="lead">
                                            We Provide high standard evidence based clinical treatments
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-5 order-md-1">
                                <img src={ahmad} />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>

            <div class="container my-4">
                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7 order-md-2">
                        <h1 className="featurette-heading fw-normal lh-1">
                            <span className="text-muted text-decoration-underline">Welcome to I & A</span>
                        </h1>
                        <h2 className="featurette-heading fw-normal lh-1">
                            Best Care For Your Good Health
                        </h2>
                        <p className="lead text-muted">
                            Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.
                        </p>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-primary">This is a primary list group item</li>
                            <li className="list-group-item list-group-item-success">This is a success list group item</li>
                            <li className="list-group-item list-group-item-primary">This is a primary list group item</li>
                            <li className="list-group-item list-group-item-success">This is a success list group item</li>
                            
                        </ul>

                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="img-fluid" src={logo} alt="I $ A Clinic" width={200} height={200} />
                    </div>
                </div>
            </div>

        </>

    )
}

export default Home