import React from 'react'
import Typewriter from "typewriter-effect";


type WriterProps = {
  content: string
  onEnd: () => void
}

function ContentWriter({ content, onEnd }: WriterProps ) {
  return (
        <Typewriter
          options={{ cursor: "", delay: 4 }}
          onInit={(typewriter) => {
            typewriter
              .typeString(content)
              .start()
              .callFunction(onEnd)
          }}
        />
  )
}

export default ContentWriter