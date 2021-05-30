import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { userThunkLogin } from '../../../redux-store/actions/userAction';
import { COLORS } from '../../../Utils/Colors';
import styles from './styles';

const Login = (props) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const loginAction = () => {
        if (email == "") {
            Alert.alert("OOPS!", "Please enter email");
            return;
        } else if (password == "") {
            Alert.alert("OOPS!", "Please enter mobile");
            return;
        }
        props.login("token");
    }

    return (
        <LinearGradient
            colors={[COLORS.PrimaryDarkColor, COLORS.PrimaryColor]}
            style={styles.container}>

            <View style={styles.container3}>
                <LinearGradient
                    colors={[COLORS.PrimaryDarkColor, COLORS.PrimaryColor]}
                    style={styles.linear}>

                    <Text style={styles.textLogin}>Login</Text>

                    <TextInput placeholder={"Email"}
                        keyboardType='email-address'
                        style={styles.input}
                        placeholderTextColor={COLORS.TextColor}
                        onChangeText={(email) => setEmail(email)}
                    />

                    <TextInput placeholder={"Password"}
                        secureTextEntry={true}
                        style={styles.input}
                        placeholderTextColor={COLORS.TextColor}
                        onChangeText={(pass) => setPassword(pass)}
                    />

                    <View style={styles.row}>
                        <TouchableOpacity style={styles.btn} onPress={loginAction} >

                            <Text style={styles.btnTxt}>Login</Text>

                        </TouchableOpacity>
                        <Text style={styles.signupText} onPress={() => { this.props.navigation.navigate('Signup') }}>Signup</Text>
                    </View>


                </LinearGradient>

            </View>
        </LinearGradient>

    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (token) => dispatch(userThunkLogin(token)),
    };
};

export default connect(null, mapDispatchToProps)(Login);

