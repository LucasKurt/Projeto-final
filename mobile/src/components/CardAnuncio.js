import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Card, Button } from "react-native-elements";

import apiProdutos from "./ApiProdutos";

function CardAnuncio() {
  return (
    <View>
      {apiProdutos.map((produto, id) => {
        return (
          <Card key={id}>
            <Card.Title
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "#393E42",
                marginBottom: 10,
                alignSelf: "center",
              }}
            >
              {produto.titulo}
            </Card.Title>
            <Card.Divider />
            <Text
              style={{
                fontSize: 18,
                color: "#5F5F5F",
                marginBottom: 10,
                alignSelf: "center",
              }}
            >
              {produto.descricao}
            </Text>

            <Card.Image
              source={{ uri: "https://source.unsplash.com/random" }}
            />
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "#5F5F5F",
                marginBottom: 10,
                alignSelf: "center",
              }}
            >
              {produto.valor}
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#007BFF",
                marginBottom: 10,
                alignSelf: "center",
              }}
            >
              {produto.doacao}
            </Text>

            <TouchableOpacity
              style={{
                height: 40,
                padding: 10,
                borderRadius: 15,
                backgroundColor: "#28A745",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#FFF", fontSize: 20 }}>Contato</Text>
            </TouchableOpacity>
          </Card>
        );
      })}
    </View>
  );
}

export default CardAnuncio;
