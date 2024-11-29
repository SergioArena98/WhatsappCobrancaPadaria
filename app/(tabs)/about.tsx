import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
    
      <Text style={styles.text}>Esse projeto foi desenvolvido para trabalho de extensão Estácio, por um dev de jogos cansado que só precisa da formação para então estudar para concurso público nas carreiras políciais. Obrigado professores Estácio pelo conhecimento adiquirido mesmo que aqui pareça pouco</Text>
      <Link href="/customers" style={styles.button}>
        Ir para Lista de Clientes
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
