import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Button } from '../components/Button';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    result,
    lastResult,
    buildNumber,
    clear,
    positiveNegative,
    deleteLastNumber,
    divide,
    multiply,
    substract,
    sum,
    calculate,
  } = useCalculator();

  return (
    <View style={styles.calContainer}>
      {lastResult !== '0' && (
        <Text style={styles.lastResult}>{lastResult}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>

      <View style={styles.buttonsRow}>
        <Button text="C" color="#9B9B9B" action={clear} />
        <Button text="+/-" color="#9B9B9B" action={positiveNegative} />
        <Button text="Del" color="#9B9B9B" action={deleteLastNumber} />
        <Button text="/" color="#FF9427" action={divide} />
      </View>
      <View style={styles.buttonsRow}>
        <Button text="7" action={buildNumber} />
        <Button text="8" action={buildNumber} />
        <Button text="9" action={buildNumber} />
        <Button text="X" color="#FF9427" action={multiply} />
      </View>
      <View style={styles.buttonsRow}>
        <Button text="4" action={buildNumber} />
        <Button text="5" action={buildNumber} />
        <Button text="6" action={buildNumber} />
        <Button text="-" color="#FF9427" action={substract} />
      </View>
      <View style={styles.buttonsRow}>
        <Button text="1" action={buildNumber} />
        <Button text="2" action={buildNumber} />
        <Button text="3" action={buildNumber} />
        <Button text="+" color="#FF9427" action={sum} />
      </View>
      <View style={styles.buttonsRow}>
        <Button text="0" widthProp action={buildNumber} />
        <Button text="." action={buildNumber} />
        <Button text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
