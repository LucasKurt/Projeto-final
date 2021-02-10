import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import Carousel from "../Components/Carrossel";
import Filtros from '../Components/Filtros';

const Home = () => {
  return (
    <ScrollView>
      <Filtros />
      <Carousel />
    </ScrollView>
  );
};
export default Home;
