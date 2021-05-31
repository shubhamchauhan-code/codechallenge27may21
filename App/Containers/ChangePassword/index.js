import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS } from '../../Utils/Colors'
import { ICONS } from '../../Utils/Images'
import Toast from 'react-native-simple-toast';
import styles from './styles'
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-community/async-storage'


const ChangePassword = (props) => {
    const [loader, setLoader] = useState(false);
    const [oldSavedPassword, setOldSavedPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        getOldPass()

    })

    const getOldPass = async () => {
        await AsyncStorage.getItem('PASSWORD').then(value => {
            setOldSavedPassword(value)
        });
    };

    const validation = () => {
        if ( oldPassword === '' || newPassword === '' || confirmPassword === '') {
            Toast.show('Please fill all the fields');
        }else if (oldSavedPassword !==  oldPassword) {
            Toast.show('You entered wrong old password');
        } else if (newPassword.length < 6) {
            Toast.show('New Password must have atleast 6 characters');
        }  else if (newPassword !== confirmPassword) {
            Toast.show("Confirm password didn't match with new password");
        }else {
            setLoader(true)
            changePassword(newPassword)
        }
    }

    const changePassword = async (password) => {
        try {
            await AsyncStorage.setItem('PASSWORD', password);
            setLoader(false)
            props.navigation.navigate('Profile')
        } catch (e) {
            setLoader(false)
            console.log("Async Err in Change password==", e)
        }
    };
    return (

        <View style={styles.container} >
            <Spinner
                visible={loader}
                size='large'
                color={COLORS.PrimaryDarkColor}
                textContent={'Please Wait...'}
                textStyle={styles.spinnerTextStyle}
            />
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[COLORS.PrimaryDarkColor, COLORS.PrimaryColor]}
                style={styles.headerStyle}
            >
                <TouchableOpacity style={styles.topLeftIcon} onPress={()=>{props.navigation.goBack()}}>
                    <Image source={ICONS.LeftArrow} resizeMode='cover' style={styles.iconImage} />
                </TouchableOpacity>
                <Text style={styles.headertextStyle}>Change Password</Text>

            </LinearGradient>


            <View style={styles.midCard}>
                <TextInput placeholder={"Old Password"}
                    secureTextEntry={true}
                    style={styles.input}
                    placeholderTextColor={COLORS.TextColor}
                    onChangeText={(text) => setOldPassword(text)}
                />

                <TextInput placeholder={"New Password"}
                    secureTextEntry={true}
                    style={styles.input}
                    placeholderTextColor={COLORS.TextColor}
                    onChangeText={(text) => setNewPassword(text)}
                />

                <TextInput placeholder={"Confirm Password"}
                    secureTextEntry={true}
                    style={styles.input}
                    placeholderTextColor={COLORS.TextColor}
                    onChangeText={(text) => setConfirmPassword(text)}
                />

            </View>


            <TouchableOpacity style={styles.logoutBtnStyle} onPress={()=>{validation()}}>
                <Text style={styles.logoutText}>
                    {"SAVE"}
                </Text>
            </TouchableOpacity>





        </View>
    )

}

export default ChangePassword
