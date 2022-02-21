import styled from "styled-components";
import pausedGram from "./gram1-trans.png";
import playingGram from "./gram-playing.gif";

interface GramophoneProps {
  playing: boolean;
}

export const PageLayout = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas: 
  "record content"
  "gram content";
  font-family: sans-serif;
  font-size: 1.6rem;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100px 1fr;
    grid-template-areas:
    "record record"
    "content content"
  }
`

export const RecordsWrapper = styled.div`
  grid-area: record;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const StyledGramophone = styled.div<GramophoneProps>`
  grid-area: gram;
  background-image: url(${({ playing }) => playing ? playingGram : pausedGram});
  background-size: contain;
  height: 100%;
  background-repeat: no-repeat;
  
  @media (max-width: 768px) {
    display: none;
  }
`

export const StyledContent = styled.div`
  grid-area: content;
  overflow: scroll;
  padding: 40px;
`