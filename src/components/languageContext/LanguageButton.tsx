import {FC} from 'react'
import {useLanguage} from './LanguageContext'
import {Button} from '@nextui-org/react'

const LanguageSwitcher: FC = () => {
  const {language, setLanguage} = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'nl' : 'en')
  }

  return (
    <Button onClick={toggleLanguage} className='primary'>
      {language === 'en' ? 'Nederlands' : 'English'}
    </Button>
  )
}

export default LanguageSwitcher
