import {FunctionComponent, PropsWithChildren} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {NavbarItem} from '@nextui-org/navbar'

interface StyledNavLinkProps extends PropsWithChildren {
  to: string
  className?: string
}

const StyledNavLink: FunctionComponent<StyledNavLinkProps> = ({to, children, className}) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <NavbarItem>
      <Link to={to} className={`${className} ${isActive ? 'text-blue-500 font-bold' : 'text-gray-500'}`}>
        {children}
      </Link>
    </NavbarItem>
  )
}

export default StyledNavLink
