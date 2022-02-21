import React, { useState } from 'react'
import { RecordsWrapper, StyledGramophone, StyledContent } from './Home.styled'
import { PageLayout } from './Home.styled'
import Record from '../../components/Record/Record'
import Typewriter from "typewriter-effect";
import * as contents from './contents';

const Home = () => {
  const [playing, setPlaying] = useState(false);
  const [content, setContent] = useState("")

  const handleClick = (message: string) => {
    if(message === content) return;
    setPlaying(true);
    setContent(message)
  }


  return (
    <PageLayout>
      <StyledGramophone playing={playing} />
      <RecordsWrapper >
        {Object.values(contents).map((content, index) => (
          <Record key={index} title={content.title} onClick={() => handleClick(content.message)} />
        ))}
      </RecordsWrapper>
      <StyledContent>
        { content && <Typewriter
          options={{ cursor: "", delay: 4 }}
          onInit={(typewriter) => {
            typewriter
              .typeString(content)
              .start()
              .callFunction(() => setPlaying(false))
          }}
        />
}
      </StyledContent>
    </PageLayout>
  )
}

export default Home