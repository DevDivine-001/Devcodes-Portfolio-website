import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <FaGithub />
            </div>
            <div>
                <FaLinkedin />
            </div>
        </div>
    )
}

export default SocialMedia