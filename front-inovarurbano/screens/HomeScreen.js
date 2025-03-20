import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Loja</Text>
      <Button title="Ver Produtos" onPress={() => navigation.navigate("Products")} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", color: "#000" },
});
import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const produtos = [
  { id: '1', nome: 'Camiseta', preco: 49.99 },
  { id: '2', nome: 'Croche', preco: 49.99 },
  { id: '3', nome: 'Camiseta UV', preco: 59.99 },
  { id: '4', nome: 'Calça Jeans', preco: 99.99 },
  { id: '5', nome: 'Tênis', preco: 199.99 },
];

export default function HomeScreen({ navigation }) {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => [...prev, produto]);
    alert(`${produto.nome} adicionado ao carrinho!`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome}</Text>
            <Text>R$ {item.preco.toFixed(2)}</Text>
            <Button
              title="Adicionar ao Carrinho"
              onPress={() => adicionarAoCarrinho(item)}
            />
          </View>
        )}
      />
    </View>
  );
}