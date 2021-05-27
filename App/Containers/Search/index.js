import React from 'react'
import { View, Text, TouchableOpacity, Image, Alert, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS } from '../../Utils/Colors'
import { ICONS } from '../../Utils/Images'
import styles from './styles'

export default class Search extends React.Component {
    constructor() {
        super()

    }

    render() {
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

                    <Text style={styles.headertextStyle}>Search</Text>

                </LinearGradient>

                <View style={styles.searchInput}>
                    <TextInput placeholder={"Search Here...."}
                        placeholderTextColor={COLORS.TextColor}
                        style={styles.textInputStyle}
                        onChangeText={(text) => {
                        }}
                    />
                    <Image source={ICONS.SearchA} resizeMode='contain' style={styles.searchIcon} />
                </View>
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

            </View>

        )
    }

}