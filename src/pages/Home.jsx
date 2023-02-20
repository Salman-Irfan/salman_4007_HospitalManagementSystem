import React from 'react'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import ibrahim from '../assets/images/ibrahim.png'
import ahmad from '../assets/images/ahmad.png'
import logo from '../assets/images/logo.png'

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
                        <p className="lead text-muted text-justify">
                            Welcome to our online clinic! We are a team of highly trained and experienced professionals providing evidence-based clinical treatments to our patients.                        </p>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-primary">Our clinic is led by a Consultant Psychiatrist based in the UK with many years of experience in the field. We also have a team of General Practitioners who work alongside the Consultant Psychiatrist to provide the highest standard of care to all our patients.</li>
                            <li className="list-group-item list-group-item-success">At our clinic, we understand that seeking treatment for mental health issues can be a daunting experience. That's why we strive to provide a safe and welcoming environment where our patients can feel comfortable and confident in their treatment.</li>
                        </ul>

                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="img-fluid" src={logo} alt="I $ A Clinic" width={200} height={200} />
                    </div>
                </div>

                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7 ">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-primary">Our services are designed to meet the unique needs of each patient. We provide a range of evidence-based treatments for mental health conditions such as depression, anxiety, bipolar disorder, schizophrenia, and more. Our team is highly trained in delivering therapies such as cognitive-behavioral therapy (CBT), psychodynamic therapy, and mindfulness-based therapies.</li>
                            <li className="list-group-item list-group-item-success">We also provide psychiatric consultations and assessments, medication management, and second opinions for those seeking a specialist opinion.</li>
                        </ul>

                    </div>
                    <div className="col-md-5 ml-5">
                        <img className="img-fluid" src={logo} alt="I $ A Clinic" width={200} height={200} />
                    </div>
                </div>

                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7 order-md-2">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-primary">Our online clinic allows patients to access our services from the comfort of their own homes, with appointments available at flexible times to fit around your schedule. Our team utilizes secure and confidential video conferencing software to ensure that patients can receive high-quality care without having to leave their homes.</li>
                            <li className="list-group-item list-group-item-success">At our clinic, we are committed to providing high-quality, compassionate care to our patients. We are constantly striving to improve our services and stay up-to-date with the latest research in the field to ensure that we provide the best possible care to our patients.</li>
                        </ul>

                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="img-fluid" src={logo} alt="I $ A Clinic" width={200} height={200} />
                    </div>
                </div>

                <div className="card bg-dark mt-5 mx-5 text-white text-center">
                    <div className="card-body">
                        <h1 className="card-title">"</h1>
                        <p className="card-text px-5 fs-2">If you are looking for a safe and reliable mental health service provider, look no further than our clinic. Contact us today to schedule a consultation and start your journey towards mental health wellness.</p>
                        
                    </div>
                </div>


            </div>

        </>

    )
}

export default Home