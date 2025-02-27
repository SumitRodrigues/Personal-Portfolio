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
                Work Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]'
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="Software Developer Student Assistant"
                        company="California State University"
                        companyLink="https://communications.fullerton.edu/"
                        time="2023 - Present"
                        address="Fullerton, CA"
                        work={[
                            "Created responsive web applications using React, Javascript, HTML, CSS and OMNI Content Management System to enhance user experience, resulting in a 30% increase in user engagement",
                            "Implemented vulnerability scanning protocols using the Qualys dashboard for risk assessment of servers and cloud security, achieving an average of 90% risk mitigation and safeguarding sensitive data for over 2,000 users",
                            "Executed accessibility testing and continuous website monitoring, ensuring a WCAG-compliant accessibility score of 98% using Compliance Sheriff, and facilitated seamless content updates using HTML, CSS, and the OMNI CMS tool",
                            "Migrated virtual desktops from Virtual Computer Labs to AWS AppStream 2.0 using image builder, which enhanced the efficiency and scalability of the College of Communication, resulting in 20% better performance and 35% less downtime",
                            "Managed and maintained over 150 MacOS and Windows devices in labs, reducing downtime by 30% through updates and performance monitoring, and provided efficient technical support to faculty, achieving a 98% satisfaction rate",
                            "Leveraged Linux commands to update, troubleshoot, and explore the speech clinic server, effectively enhancing system performance and ensuring consistent uptime for critical services",
                            "Implemented Jenkins pipelines for and notification tool for daily titan campus newspaper, enhancing data workflow and backup throughput by 50%",
                            "Optimized IT infrastructure across 11 computer labs, leveraging JAMF for Mac management and SCCM for image installations, enhancing system efficiency by 80%",
                            "Migrated virtual desktops from on-prem systems to AWS AppStream 2.0, utilizing serverless architecture, leading to 65% less downtime and enhanced remote accessibility"
                        ]}
                    />
                    <Details
                        position="Software Engineer"
                        company="BNP Paribas"
                        companyLink="https://www.bnpparibas.co.in/en/?contact=bnp-paribas-india-solutions-private-limited"
                        time="2021 - 2023"
                        address="Mumbai, India"
                        work={[
                            "Led frontend development for fintech applications, including KYC Scoring and Self-Service tools, using Java, Spring Boot and AWS Lambda, reducing average page load times for 1M+ users",
                            "Engineered backend codebase using Spring Boot microservices, to efficiently handle over 1M user requests. Implemented caching strategies and connection pooling, reducing average response time by 20%",
                            "Built and managed CI/CD pipelines using Jenkins, Docker, and Kubernetes, reducing deployment times from 4 hours to 20 minutes, ensuring seamless code integration and automated testing",
                            "Transitioned API architecture from REST to GraphQL, reducing redundant data calls by 85% and improving backend data retrieval efficiency",
                            "Automated Delphix masking jobs using Python, achieving 40% faster processing, and streamlined Confluence documentation using Selenium Webdriver and Java for improved efficiency",
                            "Enhanced real-time data monitoring with new Angular components and backend optimizations using Java and MySQL, improving system performance by 25%",
                            "Created a Python Automation Script to optimize validation procedures for the Enterprise Data Warehouse (EDW), significantly reducing manual effort and increasing operational efficiency",
                            "Reduced time for generating reports for FED by 7% by charting transactional data & liquidity assets into a report-generating tool (Triton) developed using PostgreSQL",
                            "Conducted API validation utilizing the Ready API tool, encompassing SOAP and RESTful API across diverse banking applications maintaining 95% validation accuracy"
                        ]}
                    />
                    <Details
                        position="Software Engineer Intern"
                        company="TechHighway Systems Pvt. Ltd"
                        companyLink="https://www.techhighway.ca/"
                        time="2020 - 2020"
                        address="Pune, India"
                        work={[
                            "Built a high-performance e-commerce storefront using Java and Spring Boot, hosted on AWS EC2, leading to a 20% increase in conversion rates due to improved user experience",
                            "Developed an interactive data visualization dashboard for a UK-based recruitment agency, utilizing React and D3.js, enhancing the client’s ability to match candidates with job opportunities efficiently",
                            "Managed back-end services using Node.js, ensuring high performance and scalability, decreasing server processing times by 25%",
                            "Configured and optimized Apache Tomcat servers to deploy Java-based microservices, improving API response time by 43% for high-traffic requests"
                        ]}
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;