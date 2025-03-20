import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { useState } from "react";

export default function CheckoutScreen() {
  const [paymentUrl, setPaymentUrl] = useState(null);

  const handlePayment = (method) => {
    if (method === "pagseguro") {
      setPaymentUrl("https://www.pagseguro.uol.com.br");
    } else if (method === "pix") {
      setPaymentUrl("https://www.pixpagamento.com.br"); // Substitua pela URL do seu provedor de PIX
    } else if (method === "paypal") {
      setPaymentUrl("https://www.paypal.com/checkout");
    }
  };

  return (
    <View style={styles.container}>
      {paymentUrl ? (
        <WebView source={{ uri: paymentUrl }} style={{ flex: 1 }} />
      ) : (
        <View style={styles.paymentOptions}>
          <Text style={styles.title}>Escolha o método de pagamento:</Text>
          <TouchableOpacity style={styles.button} onPress={() => handlePayment("pagseguro")}>
            <Text style={styles.buttonText}>Pagar com PagSeguro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePayment("pix")}>
            <Text style={styles.buttonText}>Pagar com PIX</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePayment("paypal")}>
            <Text style={styles.buttonText}>Pagar com PayPal</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  paymentOptions: {
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
