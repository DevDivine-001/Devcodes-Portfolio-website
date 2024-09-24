import React from 'react'

const Navigation = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'work', 'testimonials', 'skills', 'contact'].map((item, index) => (

                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                />

s

            ))}

        </div>
    )
}

export default Navigation