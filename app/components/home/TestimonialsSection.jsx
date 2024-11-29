import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-regular-svg-icons";

const TestimonialsSection = () => {
  return (
    <section className="text-center content-center container mx-auto min-h-[300px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
        <div className="flex flex-col gap-5 items-center justify-center">
          <div data-aos="fade-up" data-aos-duration="2000">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
           
          </div>
          <p className="text-gray-600" data-aos="fade-up" data-aos-duration="2500">
            Lorem ipsum dolor sit amet, cons ectetu era iscing elit. Aene an com
            odo ligula ege tdolor massa.
          </p>
          <p data-aos="fade-up" data-aos-duration="3000" className="font-semibold">
            Jane Sampson, UK
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center">
          <div data-aos="fade-up" data-aos-duration="2000">
             <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p className="text-gray-600" data-aos="fade-up" data-aos-duration="2500">
            Lorem ipsum dolor sit amet, cons ectetu era iscing elit. Aene an com
            odo ligula ege tdolor massa.
          </p>
          <p data-aos="fade-up" data-aos-duration="3000" className="font-semibold">
            Jane Sampson, UK
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center">
          <div data-aos="fade-up" data-aos-duration="2000">
             <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p data-aos="fade-up" data-aos-duration="2500" className="text-gray-600">
            Lorem ipsum dolor sit amet, cons ectetu era iscing elit. Aene an com
            odo ligula ege tdolor massa.
          </p>
          <p data-aos="fade-up" data-aos-duration="3000" className="font-semibold">
            Jane Sampson, UK
          </p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection
