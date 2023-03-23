import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext'
import Hero from '../../components/Hero/Hero';
const HomeContainer = styled.div`
    padding: 1rem 2rem;
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
`;

const Home = () => {
    const { theme } = useContext(ThemeContext)
  return (
    <HomeContainer theme={theme}>
      <Hero />
    </HomeContainer>
  )
}

export default Home