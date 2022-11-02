import {
  GoToCartButton,
  HeaderContainer,
  HeaderContent,
  LocationContainer,
} from './styles'

import coffeeDeliveryLogo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  // const { cartItems } = useCart()
  const cartItems = []

  return (
    <HeaderContainer>
      <HeaderContent className="container">
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>

        <div>
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            <span>Ponta Grossa, PR</span>
          </LocationContainer>

          <GoToCartButton to="/cart">
            <ShoppingCart size={22} weight="fill" />
            {cartItems.length > 0 && <span>{cartItems.length}</span>}
          </GoToCartButton>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
