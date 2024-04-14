"use client"
import Link from 'next/link';
import Image from "next/image";
import hacker from "../public/hacker.png"
import SkillsSection from './components/Skills'
import project from '../public/project.jpg'
import VideoOverlay from './components/VideoOverlay'

export default function Home() {
  return (
    <>
      <div>
        <VideoOverlay />
        <header>
          <div className='flex justify-between px-10 py-5 hover:shadow-lime-400'>
            <h2 className='text-primary_text hover:text-gray-50 duration-500 cursor-pointer font-mono'>Home</h2>
            <h2 className='text-primary_text hover:text-gray-50 duration-500 cursor-pointer font-mono'>
              <a href='#skills'>Skills</a>
            </h2>
            <h2 className='text-primary_text hover:text-gray-50 duration-500 cursor-pointer font-mono'>Projects</h2>
            <h2 className='text-primary_text hover:text-gray-50 duration-500 cursor-pointer font-mono'>Contact</h2>
          </div>
        </header>
        <main className='h-screen px-10'>
          <div className='flex justify-around py-32 px-24 items-center'>
            <div>
              <Image src={hacker} alt='hacker' className='w-80' />
            </div>
            <div className='typewriter'>
              <h1 className='text-primary_text text-6xl font-mono'>Hey fellas,<br /><span><b>I am Manoj</b></span></h1>
            </div>
          </div>
          <div className='p-10'>
            <h1 className='text-primary_text text-6xl font-mono text-center py-5'>About me</h1>
            <p className='text-primary_text font-mono text-xl indent-24 py-5'>Manoj.I am a developer and also a commerce student. You may have a question how can be a developer from commerce stream? Truth is anyone can became whatever they want, only if they have curiosity and consistency.Like I have a keen interest in science and Computer.</p>
            <p className='text-primary_text font-mono text-xl indent-24 pb-5'>My interest began when I saw 'Ironman' movie. Yeah, I am Moviebuff. Though it is a fictional character , Tony stark inspires me to do many science stuff. I started reading my old science books and learned a lot on web development , machine learning, computer vision , Artificial intelligence(AI) etc.., . Tony stark helps me as a springboard to do all this techie things. I created this webpage using Next JS and Taiwindcss. I think its enough to introduce myself.</p>
          </div>
          <div className='py-10'>
            <div id='skills'>
              <h1 className='text-primary_text text-6xl font-mono text-center py-5'>Skills</h1>
              <SkillsSection />
            </div>
          </div>
          <div className='py-10'>
            <div id='projcts'>
              <h1 className='text-primary_text text-6xl font-mono text-center py-10'>Projects</h1>
              <div className='grid grid-cols-2 gap-2 bg-secondary_bg py-5 px-10 rounded-lg'>
                <div className=''>
                  <Image src={project} alt='projects' className='w-full rounded-lg' />
                </div>
                <div className=' p-5'>
                  <p className='font-mono text-xl text-scondary_text'>Welcome to the Projects section of my portfolio, where you can explore a diverse array of my professional and personal projects that showcase my skills, creativity, and dedication to my craft. Each project is presented with detailed descriptions, highlighting the objectives, my role, the tools and technologies used, and the outcomes achieved. This section illustrates my ability to tackle challenges across different domains and my commitment to delivering exceptional results. </p>
                  <h2 className='font-mono text-xl text-scondary_text pt-14 text-end'>View more</h2>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
