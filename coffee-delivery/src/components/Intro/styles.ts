import styled from 'styled-components'
import CoffeIntro from '../../assets/CoffeIntro.png'

export const IntroContainer = styled.main`
  position: absolute;
  height: 544px;
  left: 0px;
  right: 0px;
  top: 104px;
  background: ${(props) => props.theme['purple-light']};
`

export const ImageContainer = styled.img`
  position: absolute;
  width: 476px;
  height: 360px;
  left: calc(50% - 476px / 2 + 322px);
  top: calc(50% - 360px / 2);
  border-image: 0;
  background: url(${CoffeIntro});
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  position: absolute;
  width: 588px;
  height: 192px;
  left: calc(50% - 588px / 2 - 266px);
  top: calc(50% - 192px / 2 - 82px);

  h1 {
    font-family: 'Baloo 2', cursive;
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  h2 {
    width: 588px;
    height: 52px;

    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
