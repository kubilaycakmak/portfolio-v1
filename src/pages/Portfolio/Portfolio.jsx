import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext';

const PortfolioContainer = styled.div`
    padding: 1rem 2rem;
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
`;

const Portfolio = () => {
    const { theme } = useContext(ThemeContext)
  return (
    <PortfolioContainer theme={theme}>Portfolio</PortfolioContainer>
  )
}

export default Portfolio