import {FC} from 'react'
import HeroSection from './HeroSection.tsx'
import HomeCards from './HomeCards.tsx'
import {useLanguage} from '../../components/languageContext/LanguageContext.tsx'

const Home: FC = () => {
  const {language} = useLanguage()

  return (
    <>
      <HeroSection />
      <div className='bg-blue-500 py-10'>
        <h1 className='text-white font-bold text-center text-2xl pb-10'>
          {language === 'en' ? 'Learn more about me' : 'Kom meer over mij te weten'}
        </h1>
        <HomeCards />
      </div>
    </>
  )
}

export default Home
