import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import Navigation from '../Navigation';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();

    return(
        <View styles = {{
            flex: 1,
            justifyContent: "center",
        }}>
        <View >
            <TextInput placeholder='Email'/> 
            <TextInput placeholder='Pass' secureTextEntry />

            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>


        </View>
    </View>
    )  
}

export default LoginScreen;