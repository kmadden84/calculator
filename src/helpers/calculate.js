export const calculate = () => {
  if (completedNumber && inProgressNumber) {
    if (operation === '+') {
      setResult(parseFloat(completedNumber) + parseFloat(inProgressNumber));
    } else if (operation === '-') {
      setResult(parseFloat(completedNumber) - parseFloat(inProgressNumber));
    } else if (operation === 'x') {
      setResult(parseFloat(completedNumber) * parseFloat(inProgressNumber));
    } else if (operation === '/') {
      setResult(parseFloat(completedNumber) / parseFloat(inProgressNumber));
    } else if (operation === '%') {
      setResult(parseFloat(completedNumber) % parseFloat(inProgressNumber));
    }
  }
  clear()
};