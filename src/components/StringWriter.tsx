import { time } from 'console';
import React, { useEffect, useState } from 'react'

type WriterProps = {
  string: string
  onEnd: () => void
  delay: number
}

function StringWriter({ string, onEnd, delay }: WriterProps) {
  const chars = Array.from(string);
  const [content, setContent] = useState("")
  const multiple = 20;

  useEffect(() => {
    setContent("");
    const timeouts: NodeJS.Timeout[] = [];
    chars.forEach((char, index) => {
      timeouts.push(setTimeout(() => setContent((curr) => curr + char), delay * multiple * index));
    });
    timeouts.push(setTimeout(() => onEnd(), delay * multiple * (timeouts.length - 1)));

    return () => {
      timeouts.forEach(clearTimeout);
    }
  }, [string])

  return (
    <p>{content}</p>
  )
}

export default StringWriter;