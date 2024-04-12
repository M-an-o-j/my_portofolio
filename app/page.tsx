"use client"
import Link from 'next/link';
import Image from "next/image";
import hacker from "../public/hacker.png"

export default function Home() {
  return (
    <>
      <div>
        <header>
          <div className='flex justify-between px-10 py-5 hover:shadow-lime-400'>
            <h2 className='text-primary_text hover:text-gray-50 duration-500 cursor-pointer font-mono'>Home</h2>
            <h2 className='text-primary_text hover:text-gray-50 duration-500 cursor-pointer font-mono'>Skills</h2>
            <h2 className='text-primary_text hover:text-gray-50 duration-500 cursor-pointer font-mono'>Projects</h2>
            <h2 className='text-primary_text hover:text-gray-50 duration-500 cursor-pointer font-mono'>Contact</h2>
          </div>
        </header>
        <main className='h-screen'>
          <div className='flex justify-around py-32 px-24 items-center'>
            <div>
              <Image src={hacker} alt='hacker' className='w-80'/>
            </div>
            <div className='typewriter'>
              <h1 className='text-primary_text text-6xl font-mono'>Hey fellas,<br /><span><b>I am Manoj</b></span></h1>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
