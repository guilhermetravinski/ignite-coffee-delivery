import {
  ActionsContainer,
  CartContainer,
  HeaderContainer,
  LocationContainer,
} from './styles'

import logoCoffee from '../../assets/Logo.svg'
import { MapPin } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} height="40px" alt="" />
      <ActionsContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" color={defaultTheme.purple} />
          Ponta Grossa
        </LocationContainer>
        <CartContainer />
      </ActionsContainer>
    </HeaderContainer>
  )
}
