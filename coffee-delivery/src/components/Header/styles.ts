import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
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
`
