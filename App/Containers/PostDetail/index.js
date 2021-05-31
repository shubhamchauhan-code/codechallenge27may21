import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import PostCommentsJsonData from '../../JsonAPI/postComments'
import { JSON_API } from '../../JsonAPI/index'
import { COLORS } from '../../Utils/Colors'
import { ICONS } from '../../Utils/Images'
import styles from './styles'
import Spinner from 'react-native-loading-spinner-overlay';

const PostDetail = (props) => {
    const [loader, setLoader] = useState(false)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [postIndex, setPostIndex] = useState("")
    const [commentData, setCommentData] = useState([])

    useEffect(() => {
        let data = JSON.parse(props.route.params.PostDetails)
        let ind = props.route.params.index
        setTitle(data.title)
        setBody(data.body)
        setPostIndex(ind)

        postComments()

    },[])

    const renderItems = (item, index) => {
        return (
            <View style={styles.card1}>
                <Text style={styles.commentName}>{item.name}</Text>
                <Text style={styles.commentEmail}>{item.email}</Text>
                <Text style={styles.commentBody}>{item.body}</Text>
            </View>
        )
    }

    const postComments = () => {
        setLoader(true)
        fetch(JSON_API.PostComments + postIndex + '/comments', {
            method: 'GET',
        })
            .then(response => {
                response.json().then(responseJson => {
                    setCommentData(responseJson)
                    setLoader(false)
                })
            })
            .catch(error => {
                setLoader(false)
                console.log(error)
            });
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
                style={styles.headerStyle}>
                <TouchableOpacity style={styles.topLeftIcon} onPress={() => props.navigation.goBack()}>
                    <Image source={ICONS.LeftArrow} resizeMode='cover' style={styles.iconImage} />
                </TouchableOpacity>
                <Text style={styles.headertextStyle}>Post Details</Text>
            </LinearGradient>


            <View style={styles.card}>
                <TextInput
                    multiline={true}
                    defaultValue={title}
                    style={styles.titleText}
                    onChangeText={(text)=>{
                        setTitle(text)
                    }}
                />
                <Text style={styles.descriptionText}>{body}</Text>
            </View>

            <Text style={styles.commText}>Comments</Text>
            <View style={styles.midCard}>
                <FlatList
                    style={styles.flatListStyle}
                    data={commentData}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) =>
                        renderItems(item, index)
                    }
                />


            </View>


        </View>
    )

}

export default PostDetail;
