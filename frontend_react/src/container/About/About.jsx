import { useState, useEffect } from "react"
import React, { motion } from 'framer-motion'

// // import images from "../../assets/logo.svg"
// import { images } from "../../constants"
import "./About.scss"
import { client, urlFor } from "../../clients"

// const abouts = [
//     { title: 'Web Development', description: `I'm a good web developer.`, imgUrl: images.about01 },
//     { title: 'Frontend Development', description: `I'm a good Front-End developer.`, imgUrl: images.about02 },
//     { title: 'Backend Development', description: `I'm a good Back-End developer.`, imgUrl: images.about03 },
//     { title: 'MERN Stack', description: `I'm a good developer.`, imgUrl: images.about04 },
// ]


const About = () => {
    const [abouts, setAbouts] = useState([]);
    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => {
            setAbouts(data);
        });
    }, []);



    return (
        <>
            <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>
            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default About
//  AppWrap(
//     MotionWrap(About, 'app__about'),
//     'about',
//     'app__whitebg',
// );