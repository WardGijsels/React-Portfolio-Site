import {FC} from 'react'
import {Link} from 'react-router-dom'
import {useLanguage} from '../../components/languageContext/LanguageContext.tsx'

const PageNotFound: FC = () => {
  const {language} = useLanguage()

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center'>
      <h1 className='text-4xl font-bold text-red-600 mb-4'>
        {language === 'en' ? 'Page not found' : 'Pagina niet gevonden'}
      </h1>
      <p className='text-lg text-gray-700 mb-6'>
        {language === 'en'
          ? 'The page you are trying to reach does not exist.'
          : 'De pagina die u probeert te bereiken bestaat niet.'}
      </p>
      <p className='text-md text-gray-500 mb-8'>
        {language === 'en' ? 'Check the URL or go back to the' : 'Controleer de URL of ga terug naar de'}{' '}
        <Link to='/' className='text-blue-500 hover:underline'>
          {language === 'en' ? 'home page' : 'startpagina'}
        </Link>
        .
      </p>
      <p className='text-sm text-gray-400'>
        {language === 'en'
          ? 'If you believe this is an error, please contact the administrator.'
          : 'Als u denkt dat dit een fout is, neem dan contact op met de beheerder.'}
      </p>
    </div>
  )
}

export default PageNotFound
