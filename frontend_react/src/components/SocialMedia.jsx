import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href='https://github.com/DevDivine-001'
                    target='_blank' rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/divineuwandu/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                sss
            </div>
        </div>
    )
}

export default SocialMedia