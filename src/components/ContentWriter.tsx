import React, { useEffect, useState } from 'react'

type WriterProps = {
  string: string
  onEnd: () => void
  delay: number
}

function ContentWriter({ string, onEnd, delay }: WriterProps ) {
  const chars = Array.from(string);
  const [content, setContent] = useState("")

  useEffect(() => {
    setContent("");
    const timeouts: NodeJS.Timeout[] = [];
    chars.forEach((char, index) => {
      timeouts.push(setTimeout(() => setContent((curr) => curr+char), delay*20*index));

    });
    return () => {
      timeouts.forEach(clearTimeout);
      onEnd();
    }
  }, [string])

  return (
    <p>{content}</p>
  )
}

export default ContentWriter