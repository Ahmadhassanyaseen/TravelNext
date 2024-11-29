"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight, faTents } from '@fortawesome/free-solid-svg-icons';

const HeroSlider = () => {
  useEffect(() => {
    // Trigger the animation for the first slide on mount
    const firstElements = document.querySelectorAll(
      ".slick-slide.slick-current .fade-left"
    );
    firstElements.forEach((element, index) => {
      const delay = index * 200; // 200ms stagger
      element.style.transitionDelay = `${delay}ms`;
      element.classList.add("visible");
    });
  }, []);

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: false,
    fade: true,
    cssEase: "ease-in-out",
    prevArrow: (
      <button type="button" className="slick-prev text-2xl text-gray-800">
        <FontAwesomeIcon icon={faChevronLeft} className="text-white" />
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next text-2xl text-gray-800">
        <FontAwesomeIcon icon={faChevronRight} className="text-white" />
      </button>
    ),
    beforeChange: () => {
      // Remove 'visible' className from all fade-left elements
      const elements = document.querySelectorAll(".slick-slide .fade-left");
      elements.forEach((element) => {
        element.classList.remove("visible");
        element.style.transitionDelay = "0ms";
      });
    },
    afterChange: () => {
      // Add 'visible' className to current slide with staggered animation
      const elements = document.querySelectorAll(
        ".slick-slide.slick-current .fade-left"
      );
      elements.forEach((element, index) => {
        const delay = index * 200;
        element.style.transitionDelay = `${delay}ms`;
        element.classList.add("visible");
      });
    },
  };

  return (
    <section id="home" className="relative min-h-screen">
      <Slider {...settings} className="slick-slider text-white text-left">
        {/* Slide 1 */}
        <div className="relative h-screen">
          <Image
            src="/assets/images/5.jpg"
            alt="Nature"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start p-20">
            <div className="text-left">
              <p className="mb-4 text-2xl fade-left">
                Experience everything nature has to offer
              </p>
              <h1 className="text-4xl md:text-6xl font-bold fade-left delay-200">
                Nature benefits you
              </h1>
              <p className="fade-left delay-400 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis tempora amet ducimus suscipit quis, optio veritatis
                temporibus assumenda, ab cum nostrum ipsa harum iste neque sint
                consequuntur aut molestias illum?
              </p>
              <a href="#" className="btn mt-6 fade-left delay-600">
                Join The Adventure <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="relative h-screen">
          <Image
            src="/assets/images/1.jpg"
            alt="Campfire"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start p-20">
            <div className="text-left">
              <p className="mb-4 text-2xl fade-left">
                Find peace in the great outdoors
              </p>
              <h1 className="text-4xl md:text-6xl font-bold fade-left delay-200">
                Relax & Recharge
              </h1>
              <p className="fade-left delay-400 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis tempora amet ducimus suscipit quis, optio veritatis
                temporibus assumenda, ab cum nostrum ipsa harum iste neque sint
                consequuntur aut molestias illum?
              </p>
              <a href="#" className="btn mt-6 fade-left delay-600">
                Join The Adventure <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="relative h-screen">
          <Image
            src="/assets/images/2.jpg"
            alt="Adventure"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start p-20">
            <div className="text-left">
              <p className="mb-4 text-2xl fade-left">Explore the unknown</p>
              <h1 className="text-4xl md:text-6xl font-bold fade-left delay-200">
                Adventure Awaits
              </h1>
              <p className="fade-left delay-400 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis tempora amet ducimus suscipit quis, optio veritatis
                temporibus assumenda, ab cum nostrum ipsa harum iste neque sint
                consequuntur aut molestias illum?
              </p>
              <a href="#" className="btn mt-6 fade-left delay-600">
                Join The Adventure <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </Slider>
      {/* Availability Form */}
      <div
        className="relative bottom-[-50px] md:absolute left-0 right-0 bg-white shadow-lg rounded-lg px-6 py-4 md:px-12 md:py-6 mx-auto max-w-6xl"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <form className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          <div
            className="flex flex-col"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <label
              htmlFor="check-in"
              className="text-sm font-semibold text-gray-600"
            >
              <FontAwesomeIcon icon={faCalendar} className="mr-1" /> CHECK-IN
            </label>
            <input
              type="date"
              id="check-in"
              className="mt-1 border-b border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div
            className="flex flex-col"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <label
              htmlFor="check-out"
              className="text-sm font-semibold text-gray-600"
            >
              <FontAwesomeIcon icon={faCalendar} className="mr-2" /> CHECK-OUT
            </label>
            <input
              type="date"
              id="check-out"
              className="mt-1 border-b border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div
            className="flex flex-col"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <label
              htmlFor="guests"
              className="text-sm font-semibold text-gray-600"
            >
              <FontAwesomeIcon icon={faUser} className="mr-1" /> GUESTS:
            </label>
            <select
              id="guests"
              className="mt-1 border-b border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
              <option>4 Adults</option>
              <option>Family</option>
            </select>
          </div>
          <div
            className="flex flex-col"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <label
              htmlFor="accommodation"
              className="text-sm font-semibold text-gray-600"
            >
              <FontAwesomeIcon icon={faTents} className="mr-1" /> ACCOMMODATION
            </label>
            <select
              id="accommodation"
              className="mt-1 border-b border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option>Default</option>
              <option>Luxury</option>
              <option>Budget</option>
              <option>Camping</option>
            </select>
          </div>
          <div
            className="mt-4 md:mt-0 flex justify-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <button type="submit" className="btn-shine">
              <span> CHECK AVAILABILITY </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSlider;
