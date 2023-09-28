import { useState, useRef } from 'react';

enum Operators {
  sum,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [result, setResult] = useState('0');
  const [lastResult, setLastResult] = useState('0');
  const lastOperation = useRef<Operators>();

  const changeNumber = () => {
    if (result.endsWith('.')) {
      setLastResult(result.slice(0, -1));
    } else {
      setLastResult(result);
    }
    setResult('0');
  };

  const buildNumber = (textNumber: string) => {
    if (result.includes('.') && textNumber === '.') {
      return;
    }

    if (result.startsWith('0') || result.startsWith('-0')) {
      if (textNumber === '.') {
        setResult(result + textNumber);
      } else if (textNumber === '0' && result.includes('.')) {
        setResult(result + textNumber);
      } else if (textNumber !== '0' && !result.includes('.')) {
        setResult(textNumber);
      } else if (textNumber === '0' && !result.includes('.')) {
        setResult(result);
      } else {
        setResult(result + textNumber);
      }
    } else {
      setResult(result + textNumber);
    }
  };

  const deleteLastNumber = () => {
    if (result.length === 1) {
      setResult('0');
    } else if (result.length === 2 && result.includes('-')) {
      setResult('0');
    } else {
      setResult(result.slice(0, -1));
    }
  };

  const positiveNegative = () => {
    if (result.includes('-')) {
      setResult(result.replace('-', ''));
    } else {
      setResult('-' + result);
    }
  };

  const clear = () => {
    setResult('0');
    setLastResult('0');
  };

  const divide = () => {
    changeNumber();
    lastOperation.current = Operators.divide;
  };

  const multiply = () => {
    changeNumber();
    lastOperation.current = Operators.multiply;
  };

  const substract = () => {
    changeNumber();
    lastOperation.current = Operators.substract;
  };

  const sum = () => {
    changeNumber();
    lastOperation.current = Operators.sum;
  };

  const calculate = () => {
    if (lastResult === '0') {
      return;
    }

    const num1 = Number(result);
    const num2 = Number(lastResult);

    switch (lastOperation.current) {
      case Operators.sum:
        setResult(`${num1 + num2}`);
        break;
      case Operators.substract:
        setResult(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setResult(`${num1 * num2}`);
        break;
      case Operators.divide:
        setResult(`${num2 / num1}`);
        break;
    }
    setLastResult('0');
  };

  return {
    result,
    lastResult,
    buildNumber,
    deleteLastNumber,
    positiveNegative,
    clear,
    divide,
    multiply,
    substract,
    sum,
    calculate,
  };
};
