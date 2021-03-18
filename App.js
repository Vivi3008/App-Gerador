import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Slider } from '@react-native-community/slider';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./src/assets/logo.png')}
        style={styles.logo} 
      />
      <Text style={styles.title}>12 Caracteres</Text>
      <Slider 
        style={{height: 50}}
        minimunValue={5}
        maximumValue={15}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3ff',
  },
});
