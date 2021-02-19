import React from "react";
import styles from "./styles.js";
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import editPhoto from "../../../assets/editphoto.png";
import perfilPhoto from "../../../assets/perfil-sem-foto.jpg";

function Perfil() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topo}>
        <ImageBackground
          imageStyle={{ borderRadius: 100 }}
          source={perfilPhoto}
          style={styles.imgPerfil}
        >
          <Image source={editPhoto} style={styles.iconEditPhoto}></Image>
        </ImageBackground>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 25,
            fontWeight: "bold",
            color: "#5F5F5F",
          }}
        >
          Seu Negócio
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 20,
            fontWeight: "300",
            color: "#5F5F5F",
          }}
        >
          Seu Nome
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.head}>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#5F5F5F" }}>
            Seus Dados
          </Text>
        </View>
        <TextInput
          style={styles.inputRadius}
          placeholder={"Nome castrado"}
        ></TextInput>
        <TextInput
          style={styles.inputRadius}
          placeholder={"Negócio cadastrado"}
        ></TextInput>
        <TextInput
          style={styles.inputRadius}
          placeholder={"E-mail cadastrado"}
        ></TextInput>
        <TextInput
          style={styles.inputRadius}
          placeholder={"Telefone cadastrado"}
        ></TextInput>

        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#FFF", fontSize: 20 }}>Editar meus dados</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 15,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "#E2E2E2" }} />
        </View>

        <View style={styles.head}>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#5F5F5F" }}>
            Seus Anúncios
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "300", color: "#007BFF" }}>
            + Novo
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonG}>
          <ImageBackground
            source={{ uri: "https://source.unsplash.com/random" }}
            style={styles.imgAnuncio}
          >
            <Image source={editPhoto} style={styles.iconEditPhoto}></Image>
          </ImageBackground>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#E33D3D",
            alignSelf: "center",
            marginBottom: 15,
          }}
        >
          Excluir este anúncio
        </Text>
        <TextInput
          style={styles.inputRadius}
          placeholder={"Título produto cadastrado"}
        ></TextInput>
        <TextInput
          style={styles.inputRadius}
          placeholder={"Valor produto cadastrado"}
        ></TextInput>
        <TextInput
          multiline={true}
          numberOfLines={5}
          style={[styles.inputRadius, styles.inputTxtArea]}
          placeholder={"Descrição produto cadastrado"}
        ></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#FFF", fontSize: 20 }}>
            Editar meus anúncios
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default Perfil;
