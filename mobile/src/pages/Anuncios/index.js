import React from "react";
import styles from "./styles.js";
import { Text, View, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";

import CardAnuncio from "../../components/CardAnuncio";

function Anuncios() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* <TextInput style={styles.inputRadius} placeholder={"Busca"} /> */}
        <SearchBar placeholder="Buscar aqui..." />
        <CardAnuncio />
      </View>
    </ScrollView>
  );
}
export default Anuncios;
