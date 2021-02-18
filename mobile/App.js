import React from "react";
import { ScrollView, StatusBar } from "react-native";

import Home from "./src/screens/Home";
import Footer from "./src/Components/Footer";

export default function App() {
  return (
    <ScrollView>
      <StatusBar />
      <Home />
      <Footer />
    </ScrollView>
  );
}
