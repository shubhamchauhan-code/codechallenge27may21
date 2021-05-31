import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../../Utils/Colors';
import styles from './styles';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';

const Signup = (props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [password, setPassword] = useState("");

    const validUser = () => {
        let emailRegx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        if (fullName === '' || email === '' || mobile === '' || address === '' || hobbies === '' || password === '') {
            Toast.show('Please fill all the fields');
        } else if (!emailRegx.test(email)) {
            Toast.show('Please enter valid email');
        } else if (password.length < 6) {
            Toast.show('Password must have atleast 6 characters');
        } else {
            saveSignUpData(fullName, email, mobile, address, hobbies, password)
        }
    }

    const saveSignUpData = async (name, email, mobile, address, hobbies, password) => {
        try {
            await AsyncStorage.setItem('FULLNAME', name);
            await AsyncStorage.setItem('EMAIL', email);
            await AsyncStorage.setItem('MOBILE', mobile);
            await AsyncStorage.setItem('ADDRESS', address);
            await AsyncStorage.setItem('HOBBIES', hobbies);
            await AsyncStorage.setItem('PASSWORD', password);

            props.navigation.reset({
                index: 0,
                routes: [{ name: 'TabNavigation' }]
            });
        } catch (e) {
            console.log("Async Err in Signup==", e)
        }
    };

  


    return (
        <LinearGradient
            colors={[COLORS.PrimaryDarkColor, COLORS.PrimaryColor]}
            style={styles.container}>


            <View style={styles.container3}>

                <LinearGradient
                    colors={[COLORS.PrimaryDarkColor, COLORS.PrimaryColor]}
                    style={styles.linear}>
                    <ScrollView>
                        <Text style={styles.textLogin}>Signup</Text>



                        <TextInput placeholder={"Name"}
                            style={styles.input}
                            placeholderTextColor={COLORS.TextColor}
                            onChangeText={(text) => {
                                setFullName(text)
                            }}
                        />

                        <TextInput placeholder={"Email"}
                            keyboardType='email-address'
                            style={styles.input}
                            placeholderTextColor={COLORS.TextColor}
                            onChangeText={(text) => {
                                setEmail(text)
                            }}
                        />

                        <TextInput placeholder={"Mobile Number"}
                            keyboardType='phone-pad'
                            style={styles.input}
                            placeholderTextColor={COLORS.TextColor}
                            onChangeText={(text) => {
                                setMobile(text)
                            }}
                        />

                        <TextInput placeholder={"Address"}
                            keyboardType='default'
                            style={styles.input}
                            placeholderTextColor={COLORS.TextColor}
                            onChangeText={(text) => {
                                setAddress(text)
                            }}
                        />

                        <TextInput placeholder={"Hobbies"}
                            keyboardType='default'
                            style={styles.input}
                            placeholderTextColor={COLORS.TextColor}
                            onChangeText={(text) => {
                                setHobbies(text)
                            }}
                        />

                        <TextInput placeholder={"Password"}
                            secureTextEntry={true}
                            style={styles.input}
                            placeholderTextColor={COLORS.TextColor}
                            onChangeText={(text) => {
                                setPassword(text)
                            }}
                        />

                        <View style={styles.row}>
                            <TouchableOpacity style={styles.btn} onPress={() => { validUser() }} >
                                <Text style={styles.btnTxt}>Signup</Text>
                            </TouchableOpacity>
                            <Text style={styles.signupText} onPress={() => { props.navigation.navigate('Login') }} >Login</Text>
                        </View>


                    </ScrollView>

                </LinearGradient>

            </View>

        </LinearGradient>

    )

}

export default Signup