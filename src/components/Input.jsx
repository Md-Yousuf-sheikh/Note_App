import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function Input({ placeholder, secureTextEntry }) {
    return (
        <TextInput placeholder={placeholder} style={styles.inputs} secureTextEntry={secureTextEntry} />
    )
}

const styles = StyleSheet.create({
    inputs: {
        marginTop: 10,
        borderBottomWidth: 2,
        borderColor: "#ddd",
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10
    }
});