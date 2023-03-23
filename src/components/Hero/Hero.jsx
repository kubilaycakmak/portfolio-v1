import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext';
import Avatar from '../Avatar/Avatar';
import TextCard from '../Card/TextCard/TextCard';

const Wrapper = styled.div`
    padding: 1rem 2rem;
`

const HeroTitle = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 72px;
    letter-spacing: 1px;
    background: ${props => props.theme === "light" ? "linear-gradient(134.01deg, #333 0.75%, #4CA9FF 95.52%)" : "linear-gradient(134.01deg, #3BF686 20.75%, #4CA9FF 90.52%)"};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: 3rem;
`;

const RowWrapper = styled.div`
    display: flex;
    gap: 2rem;
`

const Hero = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <Wrapper>
        <HeroTitle theme={theme}>Hi Im Hiroki, a special human with some ability to love learning and working on teamwork. </HeroTitle>

        <RowWrapper>
            <Avatar />
            <TextCard title="Biography" content={"Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Exicited on React, UX Research and Agile."} />
        </RowWrapper>
    </Wrapper>
  )
}

export default Hero