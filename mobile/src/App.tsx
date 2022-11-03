import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export function App() {

  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />
      <View>
        <Text style={styles.oi}>Vanessa</Text>
        <Text style={styles.tchau}>Vanessa</Text>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  oi: {
    color: 'red',
    fontSize: 50,
    // fontWeight: 'bold',
    fontFamily: 'Roboto-MediumItalic',
  },
  tchau: {
    // color: 'red',
    fontSize: 50,
    // fontWeight: 'bold',
    fontFamily: 'NotoNastaliqUrdu-Medium'
  }
})