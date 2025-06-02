import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const project1 = "/images/projects/Evergreen.png";
const project2 = "/images/projects/TourismZilla.jpg";
const project3 = "/images/projects/Restaurant.jpg";
const project4 = "/images/projects/SEO.jpg";
const project5 = "/images/projects/Navigation.jpg";
const project6 = "/images/projects/Algorithm.jpg";
const project7 = "/images/projects/Spotify.jpg";
const project8 = "/images/projects/ArticleBuzz-Project.jpg";
const project9 = "/images/projects/ai-summarizer.jpg";
const project10 = "/images/projects/Inventory.jpg";
const project11 = "/images/projects/airline.jpg";



const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 '>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]
            ' />
            <Link href={link} target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} width={1280} height={720} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                            sizes='(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            50vw'
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link 
                href={link} 
                target="_blank" 
                className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'> 
                    {" "}
                    <GithubIcon />{" "}
                    </Link>
                    <Link 
                    href={link} 
                    target="_blank"
                    className='ml-4 rounded-lg bg-dark text-light p2 px-6 text-lg font-semibold
                    dark:bg-light dark:text-dark
                    sm:px-4 sm:text-base'
                    > Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center
        rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
        '>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            
            ' />
            <Link href={link} target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} width={1280} height={720} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank"
                        className='text-lg font-semibold underline md:text-base'
                    > Visit</Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'> <GithubIcon /></Link>

                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>SumitRodrigues | projects Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!"
                        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'

                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 mg:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Evergreen Bank"
                                img={project1}
                                summary="Evergreen Bank is a financial SaaS platform built with Next.js. It connects to multiple bank 
                                accounts, displays transactions in real-time, allows users to transfer money to other platform users, 
                                and manages their finances altogether."
                                link="https://banking-app-beryl-chi.vercel.app/sign-up"
                                github="https://github.com/SumitRodrigues/banking_app"
                                type="Featured Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Tourismzilla - A travel website"
                                img={project2}
                                summary="Tourismzilla - A Travel Website created using basic web technologies. It helps the users to go through 
                                different travel packages and select one of them as its next travel destination. He could also book Train, 
                                Flight and Bus tickets through this website also he could go through various hotels and also book them for his 
                                next stay."
                                link="https://master--loquacious-begonia-f85ae0.netlify.app/"
                                github="https://github.com/SumitRodrigues/Tourismzilla"
                                type="Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Restauarant Management website"
                                img={project3}
                                summary="A simple easy to use restaurant website created using HTML, CSS, Javascript and Ajax"
                                link="https://goggle.github.io/Coursera_HTML-CSS-Javascript-for-Web-Developers/module5_solution/"
                                github="https://github.com/SumitRodrigues/Coursera_HTML-CSS-Javascript-for-Web-Developers"
                                type="Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="SEO Keyword Tracker and Analyzer"
                                img={project4}
                                summary="The SEO Keyword Tracker and Analyzer is a dynamic tool, designed to track and analyze SEO keywords 
                                for websites using advanced algorithms. Leveraging algorithms like Rabin-Karp, Suffix Tree, Suffix Array, 
                                and more, this Python and React-based tool offers computational efficiency and precision in SEO analysis. 
                                Aimed at empowering website owners and digital marketers, it provides deep insights for optimizing online 
                                visibility. This project represents a fusion of algorithmic mastery and practical application."
                                link="https://github.com/SumitRodrigues/SEO-Keyword-Tracker-and-Analyzer-main"
                                github="https://github.com/SumitRodrigues/SEO-Keyword-Tracker-and-Analyzer-main"
                                type="Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="City Navigation and Blocked Route Planning Tool"
                                img={project5}
                                summary="Our navigation tool utilizes the Floyd-Warshall algorithm to discover the quickest routes, 
                                acknowledging the significance of time in today's rapid-paced environment. Whether it's your everyday 
                                journey or an exciting road adventure, our sophisticated routing system guarantees a prompt and efficient 
                                arrival at your destination."
                                link="https://github.com/SumitRodrigues/City-Navigation-and-Blocked-Route-Planning-Tool"
                                github="https://github.com/SumitRodrigues/City-Navigation-and-Blocked-Route-Planning-Tool"
                                type="Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Algorithm Efficiency Analyzer Tool"
                                img={project6}
                                summary="This project is a Sorting Algorithm Visualizer implemented in Python using the Tkinter library 
                                for the graphical user interface (GUI). It allows users to visualize the performance of various sorting 
                                algorithms on randomly generated or user-defined arrays of numbers."
                                link="https://github.com/SumitRodrigues/Algorithm-Efficiency-Analyzer-Tool"
                                github="https://github.com/SumitRodrigues/Algorithm-Efficiency-Analyzer-Tool"
                                type="Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Spotify Clone Website"
                                img={project7}
                                summary="Created a Spotify Clone website using HTML, CSS and Javascript"
                                link="https://spotify-practice.netlify.app/"
                                github="https://github.com/SumitRodrigues/Spotify-Clone"
                                type="Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="ArticleBuzz Predictor: Anticipating Article Shares"
                                img={project8}
                                summary="Developed a real-time algorithm to predict article popularity, utilizing AWS API Gateway and Lambda.
                             Leveraged UC Irvine's dataset for training, providing insights for content creators and administrators. 
                             Utilized technologies such as HTML, JavaScript, CSS, FastAPI, NGINX, and cloud services."
                                link="https://github.com/SumitRodrigues/ArticleBuzz"
                                github="https://github.com/SumitRodrigues/ArticleBuzz"
                                type="Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="AI Summarizer"
                                img={project9}
                                summary="An AI-powered web application that generates concise summaries of lengthy articles with just 
                                one click. Built using React, TypeScript, and Tailwind CSS, it leverages OpenAI’s model for accurate 
                                summarization. Features include a modern UI, local storage for history, and a seamless copy-to-clipboard
                                 functionality, ensuring an efficient and user-friendly experience."
                                link="https://aisummarizer-black.vercel.app/"
                                github="https://github.com/SumitRodrigues/AI-Summarizer"
                                type="Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Inventory Prediction System"
                                img={project10}
                                summary="A Machine Learning-driven system for intelligent inventory forecasting and optimized stock 
                                reallocation across retail stores. The Inventory Prediction System leverages machine learning techniques
                                 — primarily a Random Forest Regressor model — to predict future sales based on historical data, 
                                 seasonality, and growth trends. Additionally, it provides actionable inventory transfer recommendations
                                  between stores to optimize stock distribution while reducing holding and transportation costs."
                                link="https://github.com/SumitRodrigues/inventory-prediction-system"
                                github="https://github.com/SumitRodrigues/inventory-prediction-system"
                                type="Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Airline Performance and Flight Delay Analysis"
                                img={project10}
                                summary="This project leverages the power of Kubernetes, Apache Spark, and Cassandra to analyze airline
                                 performance and flight delays. We use .parquet files as our primary data format."
                                link="https://github.com/SumitRodrigues/Spark-Kubernets-Cassandra_Project_CPSC531"
                                github="https://github.com/SumitRodrigues/Spark-Kubernets-Cassandra_Project_CPSC531"
                                type="Project"

                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects