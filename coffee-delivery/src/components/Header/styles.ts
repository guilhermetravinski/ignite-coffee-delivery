import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  height: 6.5rem;
  background: ${(props) => props.theme.background};

  display: flex;
  align-items: center;
  justify-content: center;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
`

export const HeaderContent = styled.div`
  display: flex;
`

export const ActionsContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`

export const LocationContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  padding: 0.5rem;
  color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;
`

export const CartContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  background: ${(props) => props.theme['yellow-light']};
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 6px;
`
