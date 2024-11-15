import {createContext, useContext, useState, FC, ReactNode} from 'react'

type Language = 'en' | 'nl'

interface LanguageContextProps {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export const LanguageProvider: FC<{children: ReactNode}> = ({children}) => {
  const [language, setLanguage] = useState<Language>('nl') // Default Nederlands

  return <LanguageContext.Provider value={{language, setLanguage}}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}
