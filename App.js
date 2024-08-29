import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState()
  const [range, setRange] = useState("Enter age")

  const calculate = () => {
    if (age > 0 && age <= 122) {
      const val = 220 - age
      setRange(Math.round( val*0.65 ) + "-" + Math.round( val*0.85 ))
    }
    else {
      setRange("Suspicious age input...")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inline}>
        <Text style={styles.age}>Age:</Text>
        <TextInput 
          style={styles.input}
          value={age}
          onChangeText={text => setAge(text)}
          keyboardType='decimal-pad'
        />
      </View>
      <Button title="Calculate" onPress={calculate}></Button>
      <Text style={styles.resultText}>Heart rate range result:</Text>
      <Text style={styles.result}>{range} BPM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  age: {
    marginBottom: 10,
    fontSize: 20,
  },
  input: {
    marginBottom: 10,
    marginLeft: 10,
    paddingLeft: 5,
    height: 50,
    width: 100,
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 3,
    borderRadius: 5,
  },
  resultText: {
    fontSize: 25,
    marginTop: 35
  },
  result: {
    marginBottom: 10,
    color: "blue",
    fontSize: 25,
    fontWeight: '900'
  }
});
