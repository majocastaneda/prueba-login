import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

export default function RegisterScreen() {

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

  return (
    <View styles = {{
        flex: 1,
        justifyContent: "center",
    }}>
      <Text>RegisterScreen</Text>
      <TextInput placeholder='Username'></TextInput>
      <TextInput placeholder='Password'></TextInput>
      <Button title="Register"></Button>
    </View>
  )
}

const styles = StyleSheet.create({})