import React, { useState } from 'react'
import { RecordsWrapper, StyledGramophone, StyledContent } from './Home.styled'
import { PageLayout } from './Home.styled'
import Record from '../../components/Record/Record'
import Typewriter from "typewriter-effect";
import * as contents from './contents';

const Home = () => {
  const [playing, setPlaying] = useState(false);
  const [content, setContent] = useState("");

  const handleClick = (message: string) => {
    if(content !== "") {
      setContent("")
      handleClick(message)
    }
    setPlaying(true)
    setContent(message);
  }

  const onEnd = () => {
    setPlaying(false);
  }

  return (
    <PageLayout>
      <StyledGramophone playing={playing} />
      <RecordsWrapper >
        {Object.values(contents).map(content => (
          <Record key={content.title} title={content.title} onClick={() => handleClick(content.message)} />
        ))}
      </RecordsWrapper>
      {content && <StyledContent>
        <Typewriter
          options={{ cursor: "", delay: 4 }}
          onInit={(typewriter) => {
            typewriter
              .typeString(content)
              .start()
              .callFunction(onEnd)
          }}
        />
      </StyledContent>
      }
    </PageLayout>
  )
}

export default Home