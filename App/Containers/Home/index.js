import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS } from '../../Utils/Colors'
import { ICONS } from '../../Utils/Images'
import HomeJsonData from '../../JsonAPI/homeJsonData'
import styles from './styles'

export default class Posts extends React.Component {
    renderItems(item, index) {
        return (
            <TouchableOpacity style={styles.card}
            onPress={() => {
                this.props.navigation.navigate('UserDetails',
                  { UserDetails: JSON.stringify(item) })
              }}
            >
                <Text style={styles.titleText}>{item.name}</Text>
                <Text style={styles.descriptionText}>{item.email}</Text>
                <Text style={styles.descriptionText}>{item.phone}</Text>
            </TouchableOpacity>
        )
    }
    render() {

        return (
            <View  style={{flex:1}}>

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
                    data={HomeJsonData}
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