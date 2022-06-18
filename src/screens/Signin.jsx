import { View, Text, TextInput, SafeAreaView, StyleSheet, Image, Platform, StatusBar, Pressable } from 'react-native'
import React from 'react'
import Button from '../components/Button';
import Input from '../components/Input';
// import { TextInput } from 'react-native-web';


export default function Signin({ navigation }) {
    return (
        <SafeAreaView style={styles.AndroidSafeArea} >
            <Image
                source={{ uri: 'https://i.ibb.co/DgY7fWD/5272.jpg' }}
                style={styles.image} />
            <Text style={styles.title}>Never forget your notes</Text>
            <Input placeholder="Email" />
            <Input placeholder="Password" secureTextEntry />
            <Button
                title={"Login"}
                customStyles={{ alignSelf: 'center', marginTop: 60 }}
            />
            <View style={styles.viewDon_tAccount}>

                <Pressable onPress={() => { navigation.navigate('Signup') }}>
                    <Text style={styles.textDon_tAccount}>
                        Don't have an account?{" "}
                        <Text style={{ color: "green" }}>SingUp</Text>
                    </Text>
                </Pressable>

            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#fff",
    },
    image: {
        width: 350,
        height: 300,
        marginLeft: 5

    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        paddingBottom: 15,
        fontWeight: 'bold'
    },
    inputs: {
        marginBottom: 10,
        borderBottomWidth: 2,
        borderColor: "#ddd",
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10
    },
    viewDon_tAccount: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20
    },
    textDon_tAccount: {

    }
});