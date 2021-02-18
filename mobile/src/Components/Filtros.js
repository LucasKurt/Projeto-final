import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default Filtros = () => {
  return(
    <View>
      <Image style={css.image}
      source={require('../assets/carrossel-1.jpg')}/>
      <Text style={css.h2}>
        Panos Bordados - TESTANDO
      </Text>
    </View>
  );
}
const css = StyleSheet.create({
  h2: {
    color: 'grey',
    fontSize: 25,
  },
  image: {
    width: 190,
    height: 190,
    borderRadius: 200,
  }
})