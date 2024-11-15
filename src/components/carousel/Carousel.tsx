import {FC, useState, useEffect} from 'react'

interface CarouselProps {
  slides: React.ReactNode[]
  autoScroll?: boolean
  interval?: number
}

const Carousel: FC<CarouselProps> = ({slides, autoScroll = true, interval = 3000}) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)

  useEffect(() => {
    if (autoScroll) {
      const autoScrollInterval = setInterval(nextSlide, interval)
      return () => clearInterval(autoScrollInterval)
    }
  }, [autoScroll, interval])

  return (
    <div className='carousel-container relative w-full overflow-hidden'>
      <div
        className='carousel-slides flex transition-transform ease-in-out duration-500'
        style={{transform: `translateX(-${currentSlide * 100}%)`}}>
        {slides.map((slide, index) => (
          <div key={index} className='carousel-slide w-full flex-shrink-0'>
            {slide}
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className='carousel-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10'>
        ❮
      </button>
      <button onClick={nextSlide} className='carousel-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10'>
        ❯
      </button>
      <div className='carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}></button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
