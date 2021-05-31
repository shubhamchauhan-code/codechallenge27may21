import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { JSON_API } from '../../JsonAPI'
import { COLORS } from '../../Utils/Colors'
import styles from './styles'
import Spinner from 'react-native-loading-spinner-overlay';

const Posts = (props) => {

    const [loader, setLoader] = useState(false);
    const [postData, setPostData] = useState([])

    useEffect(() => {
        postListData()

    }, [])
    const postListData = () => {
        setLoader(true)
        fetch(JSON_API.postList, {
            method: 'GET',
        })
            .then(response => {
                response.json().then(responseJson => {
                    setPostData(responseJson)
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
            <TouchableOpacity style={styles.card} onPress={() => {
               props.navigation.navigate('PostDetail',
                    { PostDetails: JSON.stringify(item), index: index + 1 })
            }}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.descriptionText}>{item.body}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View>
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
                <Text style={styles.headertextStyle}>Posts</Text>

            </LinearGradient>

            <FlatList
                style={styles.flatListStyle}
                data={postData}
                showsVerticalScrollIndicator={false}
                keyExtractor={(index) => index}
                renderItem={({ item, index }) =>
                    renderItems(item, index)
                }

            />
        </View>
    )
}

export default Posts