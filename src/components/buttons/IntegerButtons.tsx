import React from 'react'
import { OperatorProps } from './ClearAndDivide'

export const IntegerButtons: React.FC<OperatorProps> = ({ handleSetFunctionality }) => {

  const integers = ['1', '2', '3', '*', '4', '5', '6', '+', '7', '8', '9', '-'];

  return (
    <>
      {integers.map((integer, index) => (
        <button value={integer} key={index} className="buttons-integer" data-value={integer} onClick={(e) => handleSetFunctionality(e)}>{integer}</button>
      ))}
    </>
  )
}
export default IntegerButtons