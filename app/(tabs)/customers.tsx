import React from 'react';
import { Text, View, StyleSheet, FlatList, Button, Alert } from 'react-native';

// Função para formatar o número de telefone
const formatPhoneNumber = (phone: string) => {
  return phone.replace(/(\d{2})(\d{2})(\d{1})(\d{4})(\d{4})/, "+$1 ($2) $3 $4-$5");
};

// Dados de clientes fictícios
const sampleData = [
  { id: '1', name: 'João da Silva', phone: '5563992017131', amount: 'R$ 100' },
  { id: '2', name: 'Maria Oliveira', phone: '5511888887777', amount: 'R$ 200' },
  { id: '3', name: 'Carlos Almeida', phone: '5511777776666', amount: 'R$ 150' },
  { id: '4', name: 'Fernanda Santos', phone: '5511666665555', amount: 'R$ 250' },
  { id: '5', name: 'Ricardo Costa', phone: '5511555554444', amount: 'R$ 300' },
];

export default function ClientsScreen() {
  // Função para enviar cobrança e mostrar o alerta
  const sendCharge = (phone: string) => {
    const formattedPhone = formatPhoneNumber(phone);
    //console.log(`enviado para ${phone}`)
    Alert.alert('Cobrança enviada', `A cobrança foi enviada para ${formattedPhone}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de Clientes</Text>
      <FlatList
        data={sampleData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.clientCard}>
            <Text style={styles.clientText}>
              {item.name} - {item.amount} - {formatPhoneNumber(item.phone)}
            </Text>
            <Button title="Enviar cobrança" onPress={() => sendCharge(item.phone)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
  clientCard: {
    backgroundColor: '#1e1e2e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  clientText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
});
