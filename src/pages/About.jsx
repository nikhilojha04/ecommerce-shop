import React from 'react'
import Title from '../Components/Title'
import NewsLetterBox from '../Components/NewsLetterBox'


import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facilis, minus corporis commodi debitis consequatur necessitatibus repudiandae fugit consequuntur asperiores, in recusandae autem dolore! Alias illum officiis, corporis vitae, quo sint nostrum debitis doloribus minus sit qui incidunt vero, architecto iste? Quo nesciunt deleniti aliquam?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam officia, deleniti id vero optio expedita molestias sint. Necessitatibus deleniti aliquid impedit minima? Itaque maiores et sequi eius dicta totam mollitia, explicabo porro cumque quo!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos nostrum inventore labore voluptatum quidem facilis a, dolores nobis mollitia atque ipsum eveniet repellat suscipit molestiae aspernatur et dolore eligendi facere deleniti adipisci vitae consequuntur quia dolorum! Amet temporibus itaque eos praesentium perferendis, minima ut.</p>

        </div>

      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div> 

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti, ab aut harum repudiandae obcaecati soluta ducimus? Quibusdam quam eaque eveniet.</p>

        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti, ab aut harum repudiandae obcaecati soluta ducimus? Quibusdam quam eaque eveniet.</p>

        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service </b>
          <p className='text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti, ab aut harum repudiandae obcaecati soluta ducimus? Quibusdam quam eaque eveniet.</p>

        </div>
        
        </div> 

        <NewsLetterBox/>    
    </div>
  )
}

export default About

