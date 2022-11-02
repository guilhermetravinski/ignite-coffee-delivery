import { ImageContainer, IntroContainer, TitleContainer } from './styles'
import introBackground from '../../assets/Background.svg'

export function Intro() {
  return (
    <IntroContainer>
      <img src={introBackground} alt="" />
      <ImageContainer />
      <TitleContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>
      </TitleContainer>
    </IntroContainer>
  )
}
