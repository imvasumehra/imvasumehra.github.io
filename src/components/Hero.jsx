import React from 'react'

import {styles} from '../styles';
import { WaveformCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-[100svh] mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[clamp(130px,26vh,260px)] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Vasu</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Data scientist working on speech and language <br className='sm:block hidden' />— ASR, TTS, and LLMs.
          </p>
        </div>
      </div>

      <WaveformCanvas />


    </section>
  )
}

export default Hero