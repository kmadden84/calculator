import React, { useState, useEffect, FC } from 'react';

export const HistoryScreen: FC<{
  history: String[]
}> = ({ history }) => {

  const [showHistory, setShowHistory] = useState<boolean>(false)

  function generateHistory() {
    return history?.map((item, index) => (
      <li key={index}>{item}</li>
    ))
  }


  return (
    <>
      <button className="generate" onClick={() => setShowHistory(true)}>Generate</button>
      <ul>
        {showHistory ? generateHistory() : ''}
      </ul>
    </>
  )
}