import React from 'react'

export interface OperatorProps {
  handleSetFunctionality: (event: React.MouseEvent) => void,
}

export const ClearAndDivide: React.FC<OperatorProps> = ({ handleSetFunctionality }) => {

  const operators = ['C', '/'];

  return (
    <>
      {
        operators.map((operator, index) => (
          <button data-value={operator} value={operator} key={index} className="buttons-operator"
            onClick={(e) => handleSetFunctionality(e)}>{operator}</button>

        ))
      }
    </>
  )
}
export default ClearAndDivide;