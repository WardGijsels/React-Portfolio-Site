import {Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu} from '@nextui-org/react'
import {FC} from 'react'
import StyledNavLink from './StyledNavLink.tsx'
import LanguageButton from '../languageContext/LanguageButton.tsx'
import {useLanguage} from '../languageContext/LanguageContext.tsx'

const CustomNavBar: FC = () => {
  const {language} = useLanguage()

  return (
    <Navbar className='bg-gray-800 p-4 flex justify-center items-center'>
      <div className='flex flex-col sm:flex-row justify-center items-center w-full'>
        <NavbarBrand className='flex justify-center sm:justify-start'>
          <p className='text-xl font-bold text-white'>Ward Gijsels</p>
        </NavbarBrand>
        <NavbarContent className='flex gap-4 justify-center text-white sm:ml-4'>
          <StyledNavLink to='/' className='hover:text-gray-300'>
            Home
          </StyledNavLink>
          <StyledNavLink to='/ervaring' className='hover:text-gray-300'>
            {language === 'en' ? 'Experience' : 'Ervaring'}
          </StyledNavLink>
          <StyledNavLink to='/hobby' className='hover:text-gray-300'>
            Hobby
          </StyledNavLink>
        </NavbarContent>

        <LanguageButton />

        <NavbarMenuToggle aria-label='Toggle menu' className='sm:hidden' />
        <NavbarMenu className='flex sm:hidden'>
          <StyledNavLink to='/'>Home</StyledNavLink>
          <StyledNavLink to='/ervaring'>Ervaring</StyledNavLink>
        </NavbarMenu>
      </div>
    </Navbar>
  )
}

export default CustomNavBar
