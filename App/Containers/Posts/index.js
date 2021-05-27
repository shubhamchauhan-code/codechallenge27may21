import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { JSON_API } from '../../JsonAPI'
import postJsonData from '../../JsonAPI/postJsonData'
import { COLORS } from '../../Utils/Colors'
import { ICONS } from '../../Utils/Images'
import styles from './styles'

export default class Posts extends React.Component {

    getUserProfile = () => {
        // this.setState({ loader: true })
        fetch(JSON_API.PostDetail, {
            method: 'GET',
            headers: {
                'Authorization': token,
                'Accept': "application/json"
            },
        })
            .then(response => {
                console.log(JSON.stringify(response))
                if (response.status === 200) {
                    return response.json().then(responseJson => {
                        this.setState({ loader: false })
                        let str = responseJson.data;

                        console.log("res======46", str)

                        if (str.deparment !== null && str.deparment !== '') {
                            department = str.deparment
                        }

                        if (str.designation !== null && str.designation !== '') {
                            designation = str.designation
                        }

                        if (str.email !== null && str.email !== '') {
                            email = str.email
                        }

                        if (str.contact_no !== null && str.contact_no !== '') {
                            mobile_no = str.contact_no
                        }

                        if (str.address !== null && str.address !== '') {
                            address = str.address
                        }

                        if (str.profile_pic !== null && str.profile_pic !== '') {
                            userImage = str.profile_pic
                        }
                        console.log("res==50", userImage)
                        var userFName = ''
                        var userLName = ''
                        if (str.first_name != null && str.first_name !== '') {
                            userFName = str.first_name
                        }
                        if (str.last_name != null && str.last_name !== '') {
                            userLName = str.last_name
                        }
                        fullName = userFName + ' ' + userLName
                        console.log("59==", fullName)
                        this.setState({ refresh: !this.state.refresh })
                    });
                } else if (response.status === 400) {
                    response.json().then(responseJson => {
                        this.setState({ loader: false })
                        Toast.show(responseJson.errMsg);
                    });
                } else if (response.status === 404) {
                    response.json().then(responseJson => {
                        this.setState({ loader: false })
                        Toast.show(responseJson.errMsg);
                    })
                } else if (response.status === 403) {
                    response.json().then(responseJson => {
                        this.setState({ loader: false })
                        console.log('72==', responseJson)
                        Alert.alert(
                            "Alert Title",
                            "Session Expied, Please login again",
                            [
                                {
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                },
                                {
                                    text: "OK", onPress: () => {
                                        this.props.navigation.reset({
                                            index: 0,
                                            routes: [{ name: 'Login' }]
                                        })
                                    }
                                }
                            ]
                        );
                    })
                } else {
                    console.log("error Home")
                }
            })
            .catch(error => {
                console.log(error)
            });
    }
    renderItems(item, index) {
        return (
            <View style={styles.card}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.descriptionText}>{item.body}</Text>
            </View>

        )
    }

    render() {

        return (
            <View>

                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={[COLORS.PrimaryDarkColor, COLORS.PrimaryColor]}
                    style={styles.headerStyle}
                >
                    <TouchableOpacity style={styles.topLeftIcon} >
                        <Image source={ICONS.LeftArrow} resizeMode='cover' style={styles.iconImage} />
                    </TouchableOpacity>
                    <Text style={styles.headertextStyle}>Posts</Text>

                </LinearGradient>

                <FlatList
                    style={styles.flatListStyle}
                    data={postJsonData}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(index) => index}
                    renderItem={({ item, index }) =>
                        this.renderItems(item, index)
                    }
                />
            </View>
        )
    }
}