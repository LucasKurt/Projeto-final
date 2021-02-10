import React from 'react'
import { View,StatusBar } from 'react-native'

import Home from './src/screens/Home'

export default function App() {
  return (
    <View>
      <StatusBar/>
      <Home/>
    </View>
  );
}