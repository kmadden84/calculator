import React from 'react'
import { OperatorProps } from './ClearAndDivide'

export const OperatorButtons: React.FC<OperatorProps> = ({ handleSetFunctionality }) => {

  const operators = ['0', '.', '='];

  return (
    <>
      {
        operators.map((operator, index) => (
          <button value={operator} data-value={operator} key={index} className="buttons-operator" onClick={(e) => handleSetFunctionality(e)}>{operator}</button>
        ))
      }
    </>
  )
}
export default OperatorButtons;