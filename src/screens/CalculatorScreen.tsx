import React, { useState, useEffect } from 'react';
import IntegerButtons from '../components/buttons/IntegerButtons';
import OperatorButtons from '../components/buttons/OperatorButtons';
import DisplayScreen from '../components/display/DisplayScreen';
import ClearAndDivide from '../components/buttons/ClearAndDivide';

interface CalcScreen {
  handleSetFunctionality: (e: React.MouseEvent) => void,
  inProgressNumber: string,
  result: string | null | undefined
}


export const CalculatorScreen: React.FC<CalcScreen> = ({
  handleSetFunctionality, inProgressNumber, result
}) => {

  return (
    <div className="calculator" >

      <div className="button-container">
        <DisplayScreen inProgressNumber={inProgressNumber} result={result} />
        <div className="buttons clear-divide">
          <ClearAndDivide handleSetFunctionality={handleSetFunctionality} />
        </div>
        <div className="buttons">
          <div className="main-buttons">
            <div className="buttons operators">
              <OperatorButtons handleSetFunctionality={handleSetFunctionality} />
            </div>
            <div className="buttons numbers">
              <IntegerButtons handleSetFunctionality={handleSetFunctionality} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculatorScreen;