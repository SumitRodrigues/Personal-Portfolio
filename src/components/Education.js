import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {

    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type: "spring"}}
        >
            <h3 className='capitalize font-bold test-2xl sm:text-xl xs:text-lg'>
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Education
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative md:w-full'>


            <motion.div 
            style={{scaleY: scrollYProgress}}
            
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]
            ' /> 
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details 
                    type="Bachelor of Engineering in Computer Science"
                    time="2017 - 2021"
                    place="University of Mumbai"
                    info="Relevant Courses included Data Structures and Algorithm, Machine Learning, Artificial Intellegence, Software Engineering,
                    Computer Networks, Database Management Systems"
                    />
                    <Details 
                    type="Masters of Science in Computer Science"
                    time="2023 - 2025"
                    place="California State University, Fullerton"
                    info="Relevant Courses included Cloud Computing, Systems and Software Standards and Requirements, Professional, Ethical and
                    Legal Issues for Software Engineers, Advanced BlockChain Technologies"
                    />
                    <Details 
                    type="Online Coursework"
                    time="2017 - 2021"
                    place="Coursera, InternShaala and Oracle"
                    info="Completed Coursework in Programming with Python, Python Data Structures, HTML, CSS, and Javascript for Web Developers, Oracle Cloud Infrastructure Generative AI Professional"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education