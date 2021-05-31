import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS } from '../../Utils/Colors'
import { JSON_API } from '../../JsonAPI/index'
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './styles'

const Home = (props) => {
    const [loader, setLoader] = useState(false)
    const [userListData, setUserListData] = useState([])
    useEffect(() => {
        userList()

    },[])

    const userList = () => {
        setLoader(true)
        fetch(JSON_API.UserList, {
            method: 'GET',
        })
            .then(response => {
                response.json().then(responseJson => {
                    setUserListData(responseJson)
                    setLoader(false)

                })
            })
            .catch(error => {
                setLoader(false)
                console.log(error)
            });
    }


    const renderItems = (item, index) => {
        return (
            <TouchableOpacity style={styles.card}
                onPress={() => {
                    props.navigation.navigate('UserDetails',
                        { UserDetails: JSON.stringify(item) })
                }}
            >
                <Text style={styles.titleText}>{item.name}</Text>
                <Text style={styles.descriptionText}>{item.email}</Text>
                <Text style={styles.descriptionText}>{item.phone}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
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

                <Text style={styles.headertextStyle}>Home</Text>

            </LinearGradient>


            <FlatList
                style={styles.flatListStyle}
                data={userListData}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) =>
                    renderItems(item, index)
                }
            />

        </View>
    )


}

export default Home