import React, { useState } from 'react'
import { RecordsWrapper, StyledGramophone, StyledContent } from './Home.styled'
import { PageLayout } from './Home.styled'
import Record from '../../components/Record/Record'
import Typewriter from "typewriter-effect";

const Home = () => {
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    setPlaying(!playing);
  }

  return (
    <PageLayout>
      <StyledGramophone playing={playing} />
      <RecordsWrapper >
        <Record title="Hem" onClick={handleClick} />
        <Record title="Aktuellt" onClick={handleClick} />
        <Record title="Legacy" onClick={handleClick} />
      </RecordsWrapper>
      <StyledContent>
        {playing && <Typewriter
          options={{cursor: "", delay: 4}}
          onInit={(typewriter) => {
            typewriter
              .typeString("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
              .start();
          }}
          
        />
        }
      </StyledContent>
    </PageLayout>
  )
}

export default Home