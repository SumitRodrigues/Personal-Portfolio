import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />

            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        target='_blank'
                        className='text-primary dark:text-primaryDark capitalize'
                        rel="noopener noreferrer"
                    >
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                {/* Render work items as a bullet list */}
                <ul className='list-disc ml-5 mt-2'>
                    {work.map((item, index) => (
                        <li key={index} className='font-medium md:text-sm'>
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]'
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="Graduate Student Assistant of IT Consultant"
                        company="California State University"
                        companyLink="https://communications.fullerton.edu/"
                        time="2023 - Present"
                        address="Fullerton, CA"
                        work={[
                            "Implemented vulnerability scanning protocols using the Qualys dashboard for risk assessment of servers and cloud security, achieving an average of 90% risk mitigation and safeguarding sensitive data for over 2,000 users.",
                            "Executed accessibility testing and continuous website monitoring, ensuring a WCAG-compliant accessibility score of 98% using Compliance Sheriff, and facilitated seamless content updates using HTML, CSS, and the OMNI CMS tool.",
                            "Migrated virtual desktops from Virtual Computer Labs to AWS AppStream 2.0 using image builder, which enhanced the efficiency and scalability of the College of Communication, resulting in 20% better performance and 35% less downtime.",
                            "Managed and maintained over 150 MacOS and Windows devices in labs, reducing downtime by 30% through updates and performance monitoring, and provided efficient technical support to faculty, achieving a 98% satisfaction rate.",
                            "Leveraged Linux commands to update, troubleshoot, and explore the speech clinic server, effectively enhancing system performance and ensuring consistent uptime for critical services."
                        ]}
                    />
                    <Details
                        position="Associate Software Engineer"
                        company="BNP Paribas"
                        companyLink="https://www.bnpparibas.co.in/en/?contact=bnp-paribas-india-solutions-private-limited"
                        time="2021 - 2023"
                        address="Mumbai, India"
                        work={[
                            "Enforced Data Protection standards across enterprise apps using tools like Delphix Masking Tool, SQL Server, Oracle, Confluence, JIRA, and Excel.",
                            "Automated Delphix masking jobs using Python, achieving 40% faster processing, and streamlined Confluence documentation using Selenium Webdriver and Java for improved efficiency.",
                            "Created a Python Automation Script to optimize validation procedures for the Enterprise Data Warehouse (EDW), significantly reducing manual effort and increasing operational efficiency.",
                            "Examined and validated APIs for SOAP and REST in various banking applications using the Ready API tool."
                        ]}
                    />
                    <Details
                        position="Web Developer Intern"
                        company="TechHighway Systems Pvt. Ltd"
                        companyLink="https://www.techhighway.ca/"
                        time="2020 - 2020"
                        address="Pune, India"
                        work={[
                            "Constructed and designed web applications using Python, JavaScript, and Flutter.",
                            "Collaborated with the application team to gather requirements and developed a process mapping flowchart."
                        ]}
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;