import React, { useState } from 'react'
import { RecordsWrapper, StyledGramophone, StyledContent } from './Home.styled'
import { PageLayout } from './Home.styled'
import Record from '../../components/Record/Record'
import * as contents from './contents';
import ContentWriter from '../../components/ContentWriter';

const Home = () => {
  const [playing, setPlaying] = useState(false);
  const [content, setContent] = useState("");

  const handleClick = (message: string) => {
    setPlaying(true)
    setContent(message);
  }

  return (
    <PageLayout>
      <StyledGramophone playing={playing} />
      <RecordsWrapper >
        {Object.values(contents).map(content => (
          <Record key={content.title} title={content.title} onClick={() => handleClick(content.message)} />
        ))}
      </RecordsWrapper>
      <StyledContent>
        <ContentWriter content={content} onEnd={() => setPlaying(false)} />
      </StyledContent>
    </PageLayout>
  )
}

export default Home