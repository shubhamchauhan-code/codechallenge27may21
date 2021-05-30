import React from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import { logout } from '../../redux-store/actions/userAction'
import { COLORS } from '../../Utils/Colors'
import { ICONS } from '../../Utils/Images'
import styles from './styles'


const Profile = (props) => {

    const logout = () => {
        props.logout();
    }

    return (

        <View style={styles.container} >
            {/* <Spinner
                visible={loader}
                size='large'
                color={COLORS.PrimaryDarkColor}
                textContent={'Please Wait...'}
                textStyle={styles.spinnerTextStyle}
            /> */}
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[COLORS.PrimaryDarkColor, COLORS.PrimaryColor]}
                style={styles.headerStyle}
            >
                <TouchableOpacity style={styles.topLeftIcon} >
                    <Image source={ICONS.LeftArrow} resizeMode='cover' style={styles.iconImage} />
                </TouchableOpacity>
                <Text style={styles.headertextStyle}>Profile</Text>

            </LinearGradient>


            <View style={styles.midCard}>

                <View style={styles.textView}>
                    <Text style={styles.titleTextStyle}>Email : <Text style={styles.infoTextStyle}>email@gmail.com</Text></Text>
                    <Text style={styles.titleTextStyle}>Password : <Text style={styles.infoTextStyle}>123456</Text></Text>
                    <Text style={styles.titleTextStyle}>Address : <Text style={styles.infoTextStyle}>Indore</Text></Text>
                    <Text style={styles.titleTextStyle}>Contact : <Text style={styles.infoTextStyle}>9876543210</Text></Text>
                    <Text style={styles.titleTextStyle}>Hobbies : <Text style={styles.infoTextStyle}>Singing</Text></Text>
                </View>

                <Text style={styles.changePassStyle}>Change Password</Text>
            </View>

            <View style={{ elevation: 13, margin: 20, backgroundColor: '#efefef' }}>
                <TouchableOpacity onPress={logout}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', padding: 15, }}>
                        {"LOGOUT"}
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(null, mapDispatchToProps)(Profile);