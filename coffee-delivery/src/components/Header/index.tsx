import {
  ActionsContainer,
  CartContainer,
  HeaderContainer,
  HeaderContent,
  LocationContainer,
} from './styles'

import coffeeDeliveryLogo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>

        <ActionsContainer>
          <LocationContainer>
            <MapPin size={22} weight="fill" color={defaultTheme.purple} />
            Ponta Grossa
          </LocationContainer>
          <CartContainer>
            <ShoppingCart
              size={22}
              weight="fill"
              color={defaultTheme['yellow-dark']}
            />
          </CartContainer>
        </ActionsContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
