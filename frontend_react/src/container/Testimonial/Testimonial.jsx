import React, { useEffect } from 'react'
import "./Testimonial.scss"
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { useState } from 'react'
import { client, urlFor } from "../../clients"
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion"

const Testimonial = () => {
    const [brands, setBrands] = useState([]);
    const [testimonial, setTestimonial] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const query = '*[_type == "testimonial"]';
        const brandsQuery = '*[_type == "brands"]';

        client.fetch(query).then((data) => {
            setTestimonial(data);
        });

        client.fetch(brandsQuery).then((data) => {
            setBrands(data);
        });
    }, []);
    return (
        <div>Testimonial</div>
    )
}

export default AppWrap(
    MotionWrap(Testimonial, 'app__testimonial'),
    'testimonial',
    'app__primarybg',
);