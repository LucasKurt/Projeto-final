import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Footer = () => {
  return(
    <View>
      <Text style={css.text}>
        © 2020 Todos os direitos reservados ao Squad 8 &amp; Recode ·
      </Text>
    </View>
  );

}
const css = StyleSheet.create({
  text: {
    textAlign: 'center',
  }
})
