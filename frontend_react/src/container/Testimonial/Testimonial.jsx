import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../clients';
import './Testimonial.scss';

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonials, setTestimonials] = useState([]);
    const [brands, setBrands] = useState([]);

    const handleClick = (index) => {
        // Update the currentIndex safely, considering array bounds
        setCurrentIndex(index);
    };

    useEffect(() => {
        const query = '*[_type == "testimonials"]';
        const brandsQuery = '*[_type == "brands"]';

        client.fetch(query).then((data) => {
            setTestimonials(data);
        });

        client.fetch(brandsQuery).then((data) => {
            setBrands(data);
        });
    }, []);

    return (
        <>
            {testimonials.length > 0 && (
                <>
                    <div className="app__testimonial-item app__flex">
                        {/* Check if the current testimonial and imgurl exist */}
                        {testimonials[currentIndex]?.imgurl ? (
                            <img
                                src={urlFor(testimonials[currentIndex].imgUrl)}
                                alt={testimonials[currentIndex].name}
                            />
                        ) : (
                            <img
                                src="https://picsum.photos/101/101"
                                alt="Placeholder"
                            />
                        )}

                        <div className="app__testimonial-content">
                            <small className="name">{testimonials[currentIndex]?.feedback}</small>
                            <div>
                                <h4 className="bold-text">{testimonials[currentIndex]?.name}</h4>
                                <h5 className="p-text">{testimonials[currentIndex]?.company}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="app__testimonial-btns app__flex">
                        {/* Button to go to previous testimonial */}
                        <div
                            className="app__flex"
                            onClick={() =>
                                handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
                            }
                        >
                            <HiChevronLeft />
                        </div>

                        {/* Button to go to next testimonial */}
                        <div
                            className="app__flex"
                            onClick={() =>
                                handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
                            }
                        >
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}

            <div className="app__testimonial-brands app__flex">
                {brands.map((brand) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        key={brand._id}
                    >
                        <img src={urlFor(brand.imgUrl)} alt={brand.name} />
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Testimonial, 'app__testimonial'),
    'testimonial',
    'app__primarybg',
);
