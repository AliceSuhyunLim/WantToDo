import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions} from 'react-native';

const {height, width} = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Text style={styles.title}>WantToDo</Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder={"New To do"}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginTop: 50,
    marginBottom: 50,
    fontWeight: '600'
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
