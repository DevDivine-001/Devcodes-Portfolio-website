import React from 'react'
import "./Testimonial.scss"
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { useState } from 'react'
import { client, urlFor } from "../../clients"
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion"

const Testimonial = () => {
    const [brands, setBrands] = useState([]);
    const [testimonial, setTestimonial] = useState([]);
    return (
        <div>Testimonial</div>
    )
}

export default Testimonial