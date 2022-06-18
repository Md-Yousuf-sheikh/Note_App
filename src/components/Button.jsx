import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Button({ title, onPress, customStyles }) {
    return (
        <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
            <Text style={styles.title} >{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        width: 165,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000FF',

    },
    title: {
        fontSize: 16,
        color: '#ffff',
    }
})