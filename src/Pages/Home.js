import React from 'react'
import slider1 from '../Images/8e0ba1c7-3d19-4d4d-a25f-7b35a4bb5d91.jpg'
import slider2 from '../Images/fd4f69ec-fed2-4950-a2a5-6a47007b0c4f.jpg'
import slider3 from '../Images/b38455e4-06dc-4664-b72c-333063eba56a.jpg'
import slider4 from '../Images/9c890b7f-b99c-4a5e-b39c-b69be630ab73.jpg'
import logo1 from '../Images/house.png'
import logo2 from '../Images/beach-umbrella.png'
import logo3 from '../Images/villa.png'
import logo4 from '../Images/garden.png'
import images from '../Images/bd54ed65-0b6c-4ae3-92e2-3fd11b3a1b49.jpg'
import images2 from '../Images/ea5b89c1-f228-49c7-8bde-0dc05c4b0338.jpg'
import images3 from '../Images/dfdb8b55-a318-42b7-838b-ab78ca56962f.jpg'
import images4 from '../Images/1a07909b-3b31-4a18-9b0d-c23985f1fabd.jpg'
import imges from '../Images/71d8d450-fb61-40f9-9890-628e28e20690.jpg'
import vishal from '../Images/vishal.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from '../Componet/Layout'
import Slider from 'react-slick';
import { Link } from 'react-router-dom'
export default function Home() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000 // Set autoplay speed in milliseconds
    };
    const phoneNumber = '6354222768'; // Example phone number
    const message = 'Hello, I am interested in your services. Can we chat?';

    // URL-encode the message
    const encodedMessage = encodeURIComponent(message);

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    return (
        <Layout>
            <div className="con pt-5" id='home'>
                <div className="container pt-5   overflow-hidden">
                    <div className="row pt-4 pb-4">
                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                            <div>
                                <h1 className='home-h1'>A trusted platform <br />  for renting  farm  <br /> houses</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-2 pb-4">
                            <Slider {...settings}>
                                <div className='d-flex justify-content-center'>
                                    <img src={slider1} alt="!1" height={300} width={260} />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <img src={slider2} alt="!1" height={300} width={260} />


                                </div>
                                <div className='d-flex justify-content-center'>
                                    <img src={slider3} alt="!1" height={300} width={260} />

                                </div>
                                <div className='d-flex justify-content-center'>

                                    <img src={slider4} alt="!1" height={300} width={260} />

                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center " id='propertytype'>
                <h2 className='home-h1'>Property type</h2>

                <div className="row  pb-5 text-center">
                    <div className="col-lg-3 p-2"> <img src={logo1} alt="" /><h4 className='mt-2 con-h4'>Weekend Villa</h4></div>
                    <div className="col-lg-3 p-2"> <img src={logo2} alt="" /><h4 className='mt-2 con-h4'>Weekend House</h4></div>
                    <div className="col-lg-3 p-2"><img src={logo3} alt="" /> <h4 className='mt-2 con-h4'>Villa</h4></div>
                    <div className="col-lg-3 p-2"> <img src={logo4} alt="" /><h4 className='mt-2 con-h4'>Farm-House</h4></div>
                </div>
            </div>
            <div className="con" id='about'>
                <div className="container  pt-2 pb-2">
                    <h2 className='home-h1  text-center'>About Us</h2>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 ">
                            <img src={imges} alt="!.." className='img-fluid rounded' />
                        </div>
                        <div className="col-lg-6 col-sm-12 p-3">
                            <h5 className='home-h1 pb-0'>Modren Vill</h5>
                            <ul className='p-0'>
                                <li > Discover the fusion of luxury and nature at our modern villa farms, where contemporary design meets the serene beauty of the countryside.</li>
                                <li>    Experience the ultimate retreat in our sleek, modern villas nestled within lush farmlands, offering a perfect blend of comfort, style, and tranquility.</li>
                                <li> Embrace a unique getaway at our modern farm villas, where innovative architecture and idyllic landscapes come together for an unforgettable escape.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center" id='farmhouse'>
                <h2 className='home-h1 pb-0'>Farm-House </h2>

                <div className="row text-center">
                    <div className="col-lg-3 mt-3 mb-3 "><img src={images} alt="!/." className='rounded ' width={250} height={250} style={{ objectFit: 'cover' }} /></div>
                    <div className="col-lg-3 mt-3 mb-3"><img src={images2} alt="dvds" className='rounded ' width={250} height={250} style={{ objectFit: 'cover' }} /></div>
                    <div className="col-lg-3 mt-3 mb-3"><img src={images3} alt="sdfd" className='rounded ' width={250} height={250} style={{ objectFit: 'cover' }} /></div>
                    <div className="col-lg-3 mt-3 mb-3"><img src={images4} alt="sdfsd" className='rounded ' width={250} height={250} style={{ objectFit: 'cover' }} /></div>
                </div>
            </div>
            <div className="con" id='contact'>
                <div className="container  text-center pt-5 pb-5">
                    <h2 className='home-h1 pt-0 pb-0'>Contact Us</h2>
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center justify-content-center  ">
                            <div>
                                <h2>Get in Touch with Us Today for Any Inquiries or Assistance</h2>
                                <button className='button m-2'>

                                    <Link to={whatsappUrl} style={{ color: "white", textDecoration: "none" }} >Contact Us</Link>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mb-4 ">
                            <img src={vishal} alt="vsdd" className=' rounded' height={350} width={250} style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center overflow-hidden pb-5" id='review'>
                <h2 className='home-h1'>Our Clints Say !</h2>

                <Slider {...settings}>
                    <div>
                        <h3>"This company provided the best service I've ever experienced. Highly recommend!" - <strong>Mitesh Bhalala</strong></h3>
                    </div>
                    <div>
                        <h3>"Incredible results and outstanding support. Truly a game-changer for our business." - <strong>Fenil Akbari</strong></h3>
                    </div>
                    <div>
                        <h3>"Professional, efficient, and friendly. Couldn't ask for more." - <strong>Raj Kakadiya</strong></h3>
                    </div>

                </Slider>
            </div>

        </Layout>
    )
}
