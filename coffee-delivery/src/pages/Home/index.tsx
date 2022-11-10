import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import coffeeDeliveryHome from '../../assets/coffee-delivery-home.svg'
import { RoundedIcon } from '../../components/RoundedIcon'
import {
  HomeContainer,
  IntroContainer,
  IntroLeftContainer,
  IntroLeftListItem,
} from './styles'

export function Home() {
  const { colors } = useTheme()

  return (
    <HomeContainer className="container">
      <IntroContainer>
        <IntroLeftContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <ul>
            <IntroLeftListItem>
              <RoundedIcon
                bgColor={colors['yellow-dark']}
                icon={<ShoppingCart weight="fill" />}
              />
              <p>Compra simples e segura</p>
            </IntroLeftListItem>

            <IntroLeftListItem>
              <RoundedIcon
                bgColor={colors['base-text']}
                icon={<Package weight="fill" />}
              />

              <p>Embalagem mantém o café intacto</p>
            </IntroLeftListItem>

            <IntroLeftListItem>
              <RoundedIcon
                bgColor={colors.yellow}
                icon={<Timer weight="fill" />}
              />
              <p>Entrega rápida e rastreada</p>
            </IntroLeftListItem>

            <IntroLeftListItem>
              <RoundedIcon
                bgColor={colors.purple}
                icon={<Coffee weight="fill" />}
              />
              <p>O café chega fresquinho até você</p>
            </IntroLeftListItem>
          </ul>
        </IntroLeftContainer>
        <img src={coffeeDeliveryHome} alt="" />
      </IntroContainer>
    </HomeContainer>
  )
}
