import AsyncStorage from '@react-native-community/async-storage'
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import { logout } from '../../redux-store/actions/userAction'
import { COLORS } from '../../Utils/Colors'
import Toast from 'react-native-simple-toast';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './styles'


const Profile = (props) => {
    const [loader, setLoader] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        getUserData()
    }, [])

    const logout = () => {
        props.logout();
    }

    const getUserData = async () => {
        setLoader(true)
        await AsyncStorage.getItem('FULLNAME').then(value => {
            setFullName(value)
        });
        await AsyncStorage.getItem('EMAIL').then(value => {
            setEmail(value)
        });
        await AsyncStorage.getItem('MOBILE').then(value => {
            setMobile(value)
        });
        await AsyncStorage.getItem('ADDRESS').then(value => {
            setAddress(value)
        });
        await AsyncStorage.getItem('HOBBIES').then(value => {
            setHobbies(value)
        });
        await AsyncStorage.getItem('PASSWORD').then(value => {
            setPassword(value)
        });
        setLoader(false)
    };


    const validation = (fullName, email, mobile, address, hobbies) => {
        let emailRegx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        if (fullName === '' || email === '' || mobile === '' || address === '' || hobbies === '') {
            Toast.show('Please fill all the fields');
        } else if (!emailRegx.test(email)) {
            Toast.show('Please enter valid email');
        } else if (password.length < 6) {
            Toast.show('Password must have atleast 6 characters');
        } else {
            setLoader(true)
            updateInfo(fullName, email, mobile, address, hobbies)
        }
    }

    const updateInfo = async (fullName, email, mobile, address, hobbies) => {
        try {
            await AsyncStorage.setItem('FULLNAME', fullName);
            await AsyncStorage.setItem('EMAIL', email);
            await AsyncStorage.setItem('MOBILE', mobile);
            await AsyncStorage.setItem('ADDRESS', address);
            await AsyncStorage.setItem('HOBBIES', hobbies);

            Toast.show('Data Updated Successfully.');
            setLoader(false)
        } catch (e) {
            setLoader(false)
            console.log("Async Err in Profile==", e)
        }
    }

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
                <Text style={styles.headertextStyle}>Profile</Text>

            </LinearGradient>

            <View style={styles.midCard}>

                <View style={styles.textView}>
                    <View style={styles.rowView}>
                        <Text style={styles.titleTextStyle}>Name : </Text>
                        <TextInput placeholder={"Email"}
                            keyboardType='email-address'
                            style={styles.input}
                            placeholderTextColor={COLORS.TextColor}
                            defaultValue={fullName}
                            value={fullName}
                            onChangeText={(text) => {
                                setFullName(text)
                            }}
                        />
                    </View>

                    <View style={styles.rowView}>
                        <Text style={styles.titleTextStyle}>Email : </Text>
                        <TextInput placeholder={"Email"}
                            keyboardType='email-address'
                            style={styles.input}
                            placeholderTextColor={COLORS.TextColor}
                            defaultValue={email}
                            onChangeText={(text) => {
                                setEmail(text)
                            }}
                        />
                    </View>

                    <View style={styles.rowView}>
                        <Text style={styles.titleTextStyle}>Address : </Text>
                        <TextInput placeholder={"Address"}
                            keyboardType='default'
                            style={styles.input}
                            placeholderTextColor={COLORS.TextColor}
                            defaultValue={address}
                            onChangeText={(text) => {
                                setAddress(text)
                            }}
                        />
                    </View>

                    <View style={styles.rowView}>
                        <Text style={styles.titleTextStyle}>Contact : </Text>
                        <TextInput placeholder={"Contact"}
                            keyboardType='phone-pad'
                            style={styles.input}
                            placeholderTextColor={COLORS.TextColor}
                            defaultValue={mobile}
                            onChangeText={(text) => {
                                setMobile(text)
                            }}
                        />
                    </View>

                    <View style={styles.rowView}>
                        <Text style={styles.titleTextStyle}>Hobbies : </Text>
                        <TextInput
                            placeholder={"Hobbies"}
                            keyboardType='default'
                            style={styles.input}
                            placeholderTextColor={COLORS.TextColor}
                            defaultValue={hobbies}
                            onChangeText={(text) => {
                                setHobbies(text)
                            }}
                        />
                    </View>

                </View>

                <Text style={styles.changePassStyle} onPress={() => { props.navigation.navigate('ChangePassword') }}>Change Password</Text>

                <Text style={styles.updateBtnStyle} onPress={() => {
                    validation(fullName, email, address, mobile, hobbies)
                }}>UPDATE</Text>

            </View>


            <TouchableOpacity onPress={logout} style={styles.logoutBtnStyle}>
                <Text style={styles.logoutText}>
                    {"LOGOUT"}
                </Text>
            </TouchableOpacity>





        </View>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(null, mapDispatchToProps)(Profile);