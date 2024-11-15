import {FC} from 'react'
import {Image} from '@nextui-org/react'
import {useLanguage} from '../../components/languageContext/LanguageContext.tsx'
import HobbyTable from './HobbyTable.tsx'

const concertText = {
  en: `Ever since I was little I loved music. When I was ten years old I heard the song 'In Between' by the band Beartooth. This song was the first kind of song I ever heard that belonged to the metal genre. Since then I started listening to more metal related music. My love for the genre only grew more and more over the years.`,
  nl: `Als sinds jongs af aan hou ik van muziek. Toen ik tien jaar oud was hoorde ik het liedje 'In Between' van de band Beartooth. Dit liedje was het eerste soort lied dat ik ooit hoorden dat binnen het metal genre thuis hoorden. Sinds dien ben ik naar meer metal gerelateerde muziek gaan luisteren. Mijn liefde voor het genre groeide alleen maar meer en meer door de jaren.`,
}

const metalcoreText = {
  en: 'Metalcore is the genre I listen to the most. Metalcore is a powerful and dynamic music genre that has its roots in the late 1990s. It originated as a fusion of heavy metal and hardcore punk, combining elements of both styles to create a new sound that is both aggressive and emotionally charged. Metalcore has since built a loyal and dedicated fan base and has developed into one of the most influential and popular subgenres within the wider metal community.',
  nl: 'Metalcore is het genre waar ik het meeste naar luister. Metalcore is een krachtig en dynamisch muziekgenre dat zijn wortels heeft in de late jaren 1990. Het is ontstaan als een fusie van heavy metal en hardcore punk, waarbij elementen van beide stijlen werden gecombineerd om een nieuw geluid te creëren dat zowel agressief als emotioneel geladen is. Metalcore heeft sindsdien een trouwe en toegewijde fanbase opgebouwd en heeft zich ontwikkeld tot een van de meest invloedrijke en populaire subgenres binnen de bredere metalgemeenschap.',
}

const gameText = {
  en: (
    <>
      I've been playing games since I can remember. The first game I ever played was Super Mario Bros DS, I've been
      playing games ever since. Multiplayer and singleplayer.
      <br />
      <br />
      Pokémon holds a special place in my heart because of its nostalgic value. As a child, I spent hours catching and
      training these creatures, and I am happy to see how the franchise continues to evolve and innovate.
    </>
  ),
  nl: (
    <>
      Ik speel al games sinds zover ik me kan herinneren. De eerste game die ik ooit speelde was Super Mario Bros DS,
      sinds dien ben ik games blijven spelen. Multiplayer en singleplayer.
      <br />
      <br />
      Pokémon heeft een speciaal plekje in mijn hart vanwege de nostalgische waarde. Als kind bracht ik uren door met
      het vangen en trainen van deze wezens, en ik ben blij te zien hoe de franchise zich blijft ontwikkelen en
      vernieuwen.
    </>
  ),
}

const Hobby: FC = () => {
  const {language} = useLanguage()

  return (
    <div>
      <div className='bg-blue-500 p-5 md:p-10'>
        <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5'>
          <div className='flex-1'>
            <h1 className='text-white text-3xl font-bold'>
              {language === 'en' ? 'Concerts / Listening to music' : 'Concerten / Muziek luisteren'}
            </h1>
            <p className='text-white mt-3'>{language === 'en' ? concertText.en : concertText.nl}</p>
          </div>
          <Image
            isBlurred
            width={240}
            src='/DynamoMetalfest.jpg'
            alt='NextUI Album Cover'
            className='rounded-md shadow-lg'
          />
        </div>
      </div>

      <div className='bg-gray-800 p-5 md:p-10'>
        <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5'>
          <Image
            isBlurred
            width={240}
            src='/DynamoMetalfest.jpg'
            alt='NextUI Album Cover'
            className='rounded-md shadow-lg'
          />
          <div className='flex-1'>
            <h1 className='text-white text-3xl font-bold'>Metalcore</h1>
            <p className='text-white mt-3'>{language === 'en' ? metalcoreText.en : metalcoreText.nl}</p>
          </div>
        </div>
      </div>

      <div className='bg-blue-500 p-5 md:p-10'>
        <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5'>
          <div className='flex-1'>
            <h1 className='text-white text-3xl font-bold'>{language === 'en' ? 'Gaming' : 'Gaming'}</h1>
            <p className='text-white mt-3'>{language === 'en' ? gameText.en : gameText.nl}</p>
          </div>
          <Image isBlurred width={240} src='/Gaming.png' alt='NextUI Album Cover' className='rounded-md shadow-lg' />
        </div>

        <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5'>
          <div className='flex-1 py-10'>
            <h1 className='text-white text-3xl font-bold'>
              {language === 'en' ? 'Top 10 favorite games' : 'Top 10 favoriete games:'}
            </h1>
            <HobbyTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hobby
