import React from 'react'

interface DisplayProps {
  inProgressNumber: string | null | undefined | number,
  result: string | number | null | undefined
}

export const DisplayScreen: React.FC<DisplayProps> = ({ inProgressNumber, result }) => {
  return (
    <div className="displayScreen">

      {result ?
        <span>{result}</span>
        : <>
          <span>{inProgressNumber}</span>
        </>

      }

    </div>
  )
}
export default DisplayScreen