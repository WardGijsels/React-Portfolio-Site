import {Card, CardHeader, Image, CardFooter, Button} from '@nextui-org/react'
import {FC} from 'react'
import {useLanguage} from '../../components/languageContext/LanguageContext.tsx'
import {Link} from 'react-router-dom'

const HomeCards: FC = () => {
  const {language} = useLanguage()

  return (
    <div className='max-w-[900px] gap-2 grid grid-cols-12 grid-rows-1 mx-auto px-8'>
      <Card className='col-span-12 sm:col-span-6 h-[300px]'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>
            {language === 'en' ? 'View here my ' : 'Bekijk hier mijn'}
          </p>
          <h4 className='text-white font-medium text-large'>{language === 'en' ? 'Experiences' : 'Ervaringen'}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt='Card background'
          className='z-0 w-full h-full object-cover'
          src='./ErvaringCardImage.jpg'
        />
        <CardFooter className='absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
          <Link to='/ervaring'>
            <Button className='text-tiny' color='primary' radius='full' size='sm'>
              {language === 'en' ? 'Experience page' : 'Ervaring pagina'}
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card className='col-span-12 sm:col-span-6 h-[300px]'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>
            {language === 'en' ? 'View here my ' : 'Bekijk hier mijn'}
          </p>
          <h4 className='text-white font-medium text-large'>{language === 'en' ? 'Hobbies' : `Hobby's`}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt='Card background'
          className='z-0 w-full h-full object-cover'
          src='./HobbyCardImage.jpg'
        />
        <CardFooter className='absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
          <Link to='/hobby'>
            <Button className='text-tiny' color='primary' radius='full' size='sm'>
              {language === 'en' ? 'Hobby page' : 'Hobby pagina'}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default HomeCards
