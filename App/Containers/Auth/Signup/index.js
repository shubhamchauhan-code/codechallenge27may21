import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../../Utils/Colors';
import styles from './styles';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

    }

    validUser() {

        console.log('dgfvhg')
        if (this.state.mobile === '') {
            this.setState({ mobileErr: true, mobileErrMsg: "Please enter mobile" })
        } else if (this.state.password === '') {
            this.setState({ passErr: true, passErrMsg: "Please enter password" })
        } else {
            this.saveValueFunction();
        }
    }

    render() {
        return (
            <LinearGradient
                colors={[COLORS.PrimaryDarkColor, COLORS.PrimaryColor]}
                style={styles.container}>

                <View style={styles.container3}>
                    <LinearGradient
                        colors={[COLORS.PrimaryDarkColor, COLORS.PrimaryColor]}
                        style={styles.linear}>

                        <Text style={styles.textLogin}>Signup</Text>

                        <TextInput placeholder={"Name"}
                            style={styles.input}
                            placeholderTextColor={COLORS.TextColor}
                            onChangeText={(text) => {
                                this.setState({
                                    password: text,
                                    passErr: false
                                })
                            }}
                        />

                        <TextInput placeholder={"Email"}
                            keyboardType='email-address'
                            style={styles.input}
                            placeholderTextColor={COLORS.TextColor}
                            onChangeText={(text) => {
                                this.setState({
                                    password: text,
                                    passErr: false
                                })
                            }}
                        />

                        <TextInput placeholder={"Mobile Number"}
                         keyboardType='phone-pad'
                            style={styles.input}
                            placeholderTextColor={COLORS.TextColor}
                            onChangeText={(text) => {
                                this.setState({
                                    password: text,
                                    passErr: false
                                })
                            }}
                        />

                        <TextInput placeholder={"Password"} secureTextEntry={true}
                            style={styles.input}
                            placeholderTextColor={COLORS.TextColor}
                            onChangeText={(text) => {
                                this.setState({
                                    password: text,
                                    passErr: false
                                })
                            }}
                        />

                        <View style={styles.row}>
                            <TouchableOpacity style={styles.btn} onPress={() => { this.props.navigation.navigate('Home') }} >

                                <Text style={styles.btnTxt}>Signup</Text>

                            </TouchableOpacity>
                            <Text style={styles.signupText} onPress={() => { this.props.navigation.navigate('Login') }} >Login</Text>
                        </View>


                    </LinearGradient>

                </View>
            </LinearGradient>

        )
    }
}