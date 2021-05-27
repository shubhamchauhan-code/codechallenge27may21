import React from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS } from '../../Utils/Colors'
import { ICONS } from '../../Utils/Images'
import styles from './styles'

export default class UserDetails extends React.Component {
    constructor(props) {
        super(props)
        let UserDetails = JSON.parse(props.route.params.UserDetails)
        console.log("12==", UserDetails)
        this.state = {
            userJsonData: UserDetails,
            loading: true
        }
    }

    render() {
        const { userJsonData } = this.state
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
                    <TouchableOpacity style={styles.topLeftIcon} onPress={() => this.props.navigation.goBack()}>
                        <Image source={ICONS.LeftArrow} resizeMode='cover' style={styles.iconImage} />
                    </TouchableOpacity>
                    <Text style={styles.headertextStyle}>User Details</Text>

                </LinearGradient>




                <View style={styles.midCard}>

                    <View style={styles.textView}>
                        <Text style={styles.titleTextStyle}>Name : <Text style={styles.infoTextStyle}>{userJsonData.name}</Text></Text>
                        <Text style={styles.titleTextStyle}>User Name : <Text style={styles.infoTextStyle}>{userJsonData.username}</Text></Text>
                        <Text style={styles.titleTextStyle}>Email : <Text style={styles.infoTextStyle}>{userJsonData.email}</Text></Text>
                        <Text style={styles.titleTextStyle}>Address : <Text style={styles.infoTextStyle}>
                            {userJsonData.address.street}, {userJsonData.address.suite}
                            , {userJsonData.address.city}
                            </Text></Text>
                            <Text style={styles.titleTextStyle}>zipcode : <Text style={styles.infoTextStyle}>{userJsonData.address.zipcode}</Text></Text>
                        <Text style={styles.titleTextStyle}>Contact : <Text style={styles.infoTextStyle}>{userJsonData.phone}</Text></Text>
                        <Text style={styles.titleTextStyle}>website : <Text style={styles.infoTextStyle}>{userJsonData.website}</Text></Text>
                        <Text style={styles.companyTextStyle}>Company Details :</Text>
                        <Text style={styles.titleTextStyle}>Name : <Text style={styles.infoTextStyle}>{userJsonData.company.name}</Text></Text>
                        <Text style={styles.titleTextStyle}>CatchPhrase : <Text style={styles.infoTextStyle}>{userJsonData.company.catchPhrase}</Text></Text>
                        <Text style={styles.titleTextStyle}>bs : <Text style={styles.infoTextStyle}>{userJsonData.company.bs}</Text></Text>
                    </View>
                </View>

            </View>

        )
    }

}