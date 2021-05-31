import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, Alert, TextInput, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { JSON_API } from '../../JsonAPI'
import { COLORS } from '../../Utils/Colors'
import { ICONS } from '../../Utils/Images'
import styles from './styles'
import Spinner from 'react-native-loading-spinner-overlay';

const Search = () => {
    const [loader, setLoader] = useState(false);
    const [searchData, setSearchData] = useState([])

    useEffect(() => {
       searchDataList()

    },[])
    const searchDataList = () => {
        setLoader(true)
        fetch(JSON_API.SearchList, {
            method: 'GET',
        })
            .then(response => {
                response.json().then(responseJson => {
                    setSearchData(responseJson)
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
            <View style={styles.card}>
                <Image source={{uri: item.url}} resizeMode='contain' style={styles.imgStyle} />
                <Text style={styles.titleText}>{item.title}</Text>
            </View>
        )
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

                <FlatList
                    style={styles.flatListStyle}
                    data={searchData}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) =>
                        renderItems(item, index)
                    }
                />
              
            </View>

        )
    

}

export default Search 