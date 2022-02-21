import React from 'react'
import { RecordWrapper, StyledRecord } from './Record.styled'

type RecordProps = {
  onClick: () => void
  title: string
}

const Record = ({ onClick, title }: RecordProps) => {
  return (
    <RecordWrapper>
      <StyledRecord onClick={onClick} />
      <p>{title}</p>
    </RecordWrapper>
  )
}

export default Record