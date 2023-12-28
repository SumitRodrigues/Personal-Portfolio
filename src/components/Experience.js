import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {

    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref}/>
        
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type: "spring"}}
        >
            <h3 className='capitalize font-bold test-2xl'>{position}&nbsp;<a href={companyLink}
                target='_blank'
                className='text-primary dark:text-primaryDark capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>


            <motion.div 
            style={{scaleY: scrollYProgress}}
            
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light' /> 
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                        position="Graduate Student Assistant of IT Consultant" company="California State University"
                        companyLink="https://communications.fullerton.edu/"
                        time="2023 - Present" address="Fullerton, CA"
                        work="Implemented vulnerability scanning protocols using the Qualys dashboard for risk assessment of servers and cloud security, 
                    achieving an average of 90% risk mitigation and safeguarding sensitive data for over 2,000 users. 
                    I executed accessibility testing and continuous website monitoring, ensuring a WCAG-compliant accessibility score of 98% 
                    using Compliance Sheriff, and facilitated seamless content updates using HTML, CSS, and the OMNI CMS tool. 
                    Additionally, I migrated virtual desktops from Virtual Computer Labs to AWS AppStream 2.0 using image builder, 
                    which enhanced the efficiency and scalability of the College of Communication, resulting in 20% better performance and 
                    35% less downtime. I also managed and maintained over 150 MacOS and Windows devices in labs, reducing downtime by 30% 
                    through updates and performance monitoring, and provided efficient technical support to faculty, achieving a 98% satisfaction rate."


                    />
                    <Details
                        position="Associate Software Engineer" company="BNP Paribas"
                        companyLink="https://www.bnpparibas.co.in/en/?contact=bnp-paribas-india-solutions-private-limited"
                        time="2021 - 2023" address="Mumbai, India"
                        work="Enforced Data Protection standards across enterprise apps using tools like Delphix Masking Tool, SQL Server, Oracle, 
                    Confluence, JIRA, and Excel. I automated Delphix masking jobs using Python, achieving 40% faster processing, and streamlined Confluence
                    documentation using Selenium Webdriver and Java for improved efficiency. Additionally, I created a Python Automation Script to optimize 
                    validation procedures for the Enterprise Data Warehouse (EDW), significantly reducing manual effort and increasing operational efficiency. 
                    I also have experience in examining and validating APIs for SOAP and REST in various banking applications using the Ready API tool."
                    
                    />
                    <Details 
                    position="Web Developer Intern" company="TechHighway Systems Pvt. Ltd"
                    companyLink="https://www.techhighway.ca/"
                    time="2020 - 2020" address="Pune, India"
                    work="Constructed and Designed web applications using Python, JavaScript, and Flutter also
                    collaborated with the application team to gather requirements and developed a process mapping flowchart."
                    
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience