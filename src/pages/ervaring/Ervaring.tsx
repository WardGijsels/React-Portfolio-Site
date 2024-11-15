import {FC} from 'react'
import {useLanguage} from '../../components/languageContext/LanguageContext.tsx'
import ErvaringCards from './ErvaringCards.tsx'
import Carousel from '../../components/carousel/Carousel.tsx'

const ErvaringText = {
  en: 'Below you will find an overview of some of the projects I completed during my studies.',
  nl: 'Hieronder vindt u een overzicht van enkele projecten die ik tijdens mijn opleiding heb gerealiseerd.',
}

const StageErvaringText = {
  en: (
    <>
      During my 6th year in secondary school, I did an office job where I also had to do internships. My first
      internship started in September 2021 in the Van Zon catering business in Beerse. Here I often sat at the reception
      where I had to work with the company's system. At the same time, I also had to receive and telephone customers. It
      also happened sometimes that I had to do other tasks within the company, such as helping out in the store or the
      warehouse.
      <br />
      <br />
      I also did an internship at Würth Shop Turnhout. During my internship here, I helped digitize all files within the
      company.
      <br />
      <br />
      Würth Shop Turnhout is a renowned store located in the beautiful city of Turnhout, Belgium. This store is part of
      the internationally renowned Würth Group, which specializes in the supply of high-quality fasteners, tools, and
      building materials.
      <br />
      <br />
      In Würth Shop Turnhout, customers will find an extensive range of products, ranging from screws, bolts, and nuts
      to hand tools, power tools, personal protective equipment, and much more. The store is aimed at both professional
      tradespeople and DIY enthusiasts, offering expert advice and support to ensure customers find the right products
      for their specific needs.
    </>
  ),
  nl: (
    <>
      Ik heb tijdens mijn 6de jaar in het middelbaar kantoor gedaan waarbij ik ook stages moest doen. Mijn eerste stage
      begon in september van 2021 in Horeca zaak Van Zon gelegen in Beerse. Hier zat ik vaak aan het onthaal waar ik met
      het systeem van het bedrijf moest werken. Tegelijkertijd moest ik natuurlijk ook klanten ontvangen en telefoneren.
      Het gebeurde soms ook dat ik andere taken moest doen binnen het bedrijf zoals bijvoorbeeld mee helpen in de winkel
      of het magazijn.
      <br />
      <br />
      Ik heb ook nog stage gelopen in Würth Shop Turnhout. Ik heb tijdens mijn stage hier geholpen met het digitaliseren
      van alle bestanden binnen het bedrijf.
      <br />
      <br />
      Würth Shop Turnhout is een gerenommeerde winkel gelegen in de prachtige stad Turnhout, België. Deze winkel is een
      onderdeel van de internationaal bekende Würth Group, die gespecialiseerd is in de levering van hoogwaardige
      bevestigingsmiddelen, gereedschappen en bouwmaterialen.
      <br />
      <br />
      In Würth Shop Turnhout vinden klanten een uitgebreid assortiment producten, variërend van schroeven, bouten, en
      moeren tot handgereedschappen, elektrisch gereedschap, persoonlijke beschermingsmiddelen en nog veel meer. De
      winkel richt zich op zowel professionele vakmensen als enthousiaste doe-het-zelvers, en biedt deskundig advies en
      ondersteuning om ervoor te zorgen dat klanten de juiste producten voor hun specifieke behoeften vinden.
    </>
  ),
}

const slides = [
  <img src='/skills/Csharp.png' alt='Slide 1' className='w-full h-full object-cover' />,
  <img src='/skills/JavaScript.png' alt='Slide 2' className='w-full h-full object-cover' />,
  <img src='/skills/React.png' alt='Slide 3' className='w-full h-full object-cover' />,
  <img src='/skills/TypeScript.png' alt='Slide 4' className='w-full h-full object-cover' />,
  <img src='/skills/SQL.png' alt='Slide 5' className='w-full h-full object-cover' />,
  <img src='/skills/HTML5.png' alt='Slide 6' className='w-full h-full object-cover' />,
  <img src='/skills/CSS.png' alt='Slide 7' className='w-full h-full object-cover' />,
  <img src='/skills/Bootstrap.png' alt='Slide 8' className='w-full h-full object-cover' />,
]

const Ervaring: FC = () => {
  const {language} = useLanguage()

  return (
    <>
      <div className='bg-blue-500 py-10'>
        <h1 className='text-white font-bold text-center text-3xl pb-5'>
          {language === 'en' ? 'Experience' : 'Ervaring'}
        </h1>
        <p className='text-white font-bold text-center text-2xl pb-10'>
          {language === 'en' ? ErvaringText.en : ErvaringText.nl}
        </p>
        <ErvaringCards />
      </div>
      <div className='bg-gray-800 py-10'>
        <h1 className='text-white font-bold text-center text-3xl pb-5'>
          {language === 'en' ? 'Internship Experience' : 'Stage Ervaring'}
        </h1>
        <p className='text-white text-center text-xl max-w-2xl mx-auto px-4 pb-10'>
          {language === 'en' ? StageErvaringText.en : StageErvaringText.nl}
        </p>
      </div>
      <div className='bg-blue-500 py-10 flex flex-col items-center space-y-5'>
        <h1 className='text-white font-bold text-center text-3xl mb-52'>{language === 'en' ? 'Skills' : 'Skills'}</h1>
        <div className='max-w-md w-full h-64 flex justify-center items-center'>
          <div className='mb-60'>
            <Carousel slides={slides} autoScroll interval={5000} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Ervaring
