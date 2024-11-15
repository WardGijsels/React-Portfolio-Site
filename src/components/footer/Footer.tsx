import {FC} from 'react'
import {Button} from '@nextui-org/react'
import {Link} from 'react-router-dom'
import {useLanguage} from '../languageContext/LanguageContext.tsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer: FC = () => {
  const {language} = useLanguage()

  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
        <div className='text-center md:text-left'>
          <h2 className='text-2xl font-bold'>Ward Gijsels</h2>
          <p className='text-gray-400'>Portfolio website</p>
        </div>

        <div className='flex space-x-6'>
          <Link to='/' color='primary'>
            Home
          </Link>
          <Link to='/ervaring' color='primary'>
            {language === 'en' ? 'Experience' : 'Ervaring'}
          </Link>
          <Link to='/hobby' color='primary'>
            Hobby
          </Link>
        </div>

        <div className='flex space-x-4'>
          <Button
            as='a'
            className='accent-primary'
            href='https://github.com/WardGijsels'
            target='_blank'
            rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} />
          </Button>
          <Button
            as='a'
            className='accent-primary'
            href='https://www.linkedin.com/in/ward-gijsels-53a3a6211/'
            target='_blank'
            rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} />
          </Button>
        </div>
      </div>

      <div className='text-center mt-8 text-gray-500 text-sm'>
        &copy; {new Date().getFullYear()} Ward Gijsels. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
