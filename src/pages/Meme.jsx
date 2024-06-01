import { Canvas } from '@react-three/fiber'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const Meme = () => {
  const [emblaRef] = useEmblaCarousel()

  return (
	<div className='bg-[#efea69] p-10 w-full'>
		<div className="embla mx-auto mt-12 h-auto max-w-lg border-black" ref={emblaRef}>
		<div className="embla__container h-full">
			<div className="embla__slide flex items-center justify-center">
				<img src='meme1.png' className='rounded-md mb-2 w-full'/>
			</div>

			<div className="embla__slide flex items-center justify-center">
				<img src='meme2.png' className='rounded-md mb-2 w-full'/>
			</div>

			<div className="embla__slide flex items-center justify-center">
				<img src='meme3.jpg' className='rounded-md mb-2 w-full'/>
			</div>

			<div className="embla__slide flex items-center justify-center">
				<img src='meme4.png' className='rounded-md mb-2 w-full'/>
			</div>

			<div className="embla__slide flex items-center justify-center">
				<img src='meme5.jpg' className='rounded-md mb-2 w-full'/>
			</div>

			<div className="embla__slide flex items-center justify-center">
				<img src='meme6.png' className='rounded-md mb-2 w-full'/>
			</div>

			<div className="embla__slide flex items-center justify-center">
				<img src='meme7.png' className='rounded-md mb-2 w-full'/>
			</div>

			<div className="embla__slide flex items-center justify-center">
				<img src='meme8.png' className='rounded-md mb-2 w-full'/>
			</div>

			<div className="embla__slide flex items-center justify-center">
				<img src='meme9.png' className='rounded-md mb-2 w-full'/>
			</div>

			<div className="embla__slide flex items-center justify-center">
				<img src='meme10.png' className='rounded-md mb-2 w-full'/>
			</div>
		</div>
		</div>
	</div>
  )
}

export default Meme