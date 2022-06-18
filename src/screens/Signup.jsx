import { View, Text, TextInput, SafeAreaView, StyleSheet, Image, Platform, StatusBar, Pressable } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button';
import Svg, { Path } from "react-native-svg"
import Input from '../components/Input';

const genderOption = ["Male", "Female"];


export default function Signup({ navigation }) {
    const [gender, setGender] = useState(null)

    return (
        <SafeAreaView style={styles.AndroidSafeArea} >
            <View style={styles.header}>
                {/* icon */}
                <Pressable onPress={() => { navigation.navigate('Signin') }} style={{ flexDirection: 'row', alignItems: 'center', }} >
                    <Svg
                        viewBox="0 0 49.656 49.656"
                        style={{
                            width: 20,
                            height: 20
                        }}
                        xmlSpace="preserve"
                    >
                        <Path
                            style={{
                                fill: "#00ad97",
                            }}
                            d="m35.121 1.414 2.828 2.828-20.585 20.586 20.585 20.586-2.828 2.828-23.414-23.414z"
                        />
                        <Path
                            style={{
                                fill: "#00ad97",
                            }}
                            d="m35.122 49.656-24.83-24.828L35.121 0l4.242 4.242-20.585 20.586 20.586 20.586-4.242 4.242zM13.121 24.828l22.001 22 1.414-1.414L15.95 24.828 36.535 4.242l-1.414-1.414-22 22z"
                        />
                    </Svg>
                    <Text style={{ fontSize: 16 }}>
                        Sing Up
                    </Text>
                </Pressable>
            </View>
            {/* Input */}
            <Input placeholder={"Full Name"} />
            <Input placeholder={"Email Address"} />
            <Input placeholder={"Password"} secureTextEntry />
            <Input placeholder={"Age"} />
            {/* Radio btn */}
            <View>
                <Text style={{ marginVertical: 10, marginLeft: 10 }}>Select Gender:</Text>
            </View>
            {
                genderOption.map((option) => {
                    const selected = option === gender;
                    return (
                        <Pressable onPress={() => setGender(option)} key={option} style={styles.radioContainer}>
                            <View style={[styles.outerCircle, selected && styles.selectedOuterCircle]}>
                                <View style={[styles.innerCircle, selected && styles.selectedInnerCircle]} />
                            </View>
                            <Text style={styles.radioText}>
                                {option}
                            </Text>
                        </Pressable>
                    )
                })
            }
            {/* button  */}
            <Button
                title={"Sing In"}
                customStyles={{ alignSelf: 'center', marginTop: 60 }}
            />
            <View style={styles.account}>

                <Pressable onPress={() => { navigation.navigate('Signin') }}>
                    <Text style={styles.textDon_tAccount}>
                        Already have an account?{" "}
                        <Text style={{ color: "green" }}>SingIn</Text>
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
    header: {
        borderBottomWidth: 2,
        borderColor: '#ddd',
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'row'
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    // radio btn
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 10
    },
    outerCircle: {
        height: 30,
        width: 30,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#ccc",
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    // selected outer circle
    selectedOuterCircle: {
        borderColor: 'red',
    },
    innerCircle: {
        height: 15,
        width: 15,
        borderRadius: 50,
    },
    // Selected Inner Circle
    selectedInnerCircle: {
        backgroundColor: 'red',
        borderRadius: 50,
    },
    radioText: {

    },
    // end text
    account: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20
    },
});