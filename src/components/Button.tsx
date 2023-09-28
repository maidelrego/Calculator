import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  text: string;
  color?: string;
  widthProp?: boolean;
  action: (textNumber: string) => void;
}

export const Button = ({
  text,
  color = '#2D2D2D',
  widthProp = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={[
          styles.button,
          {
            backgroundColor: color,
          },
          widthProp ? { width: 160 } : {},
        ]}>
        <Text
          style={[
            styles.buttonText,
            {
              color: color === '#9B9B9B' ? 'black' : 'white',
            },
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 70,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '400',
  },
});
