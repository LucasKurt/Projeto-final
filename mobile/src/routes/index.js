import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Mei from '../pages/Mei';
import Perfil from '../pages/Perfil';
import Anuncios from '../pages/Anuncios';
import Cadastro from '../pages/Cadastro';
import CadVendedor from '../pages/CadVendedor';
import CadCliente from '../pages/CadCliente';
import CadConcluido from '../pages/CadConcluido';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerStyle: { backgroundColor: '#007BFF' }, headerTintColor: '#FFF' }}>
      <Stack.Screen name="Login" component={Login} options={{title: 'Comércio Amigável'}} />
      <Stack.Screen name="Mei" component={Mei} options={{title: 'Você conhece o MEI?'}} />
      <Stack.Screen name="Perfil" component={Perfil} options={{title: 'Minha conta'}} />
      <Stack.Screen name="Anuncios" component={Anuncios} options={{title: 'Anúncios'}} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{title: 'Cadastro'}} />
      <Stack.Screen name="CadVendedor" component={CadVendedor} options={{title: 'Cadastro de Vendedor'}} />
      <Stack.Screen name="CadCliente" component={CadCliente} options={{title: 'Cadastro de Cliente'}} />
      <Stack.Screen name="CadConcluido" component={CadConcluido} options={{title: 'Parabéns !'}} />
    </Stack.Navigator>
  )
}