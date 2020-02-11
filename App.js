import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Meu primeiro app. Cainan Valentim</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff#FF8C7A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
