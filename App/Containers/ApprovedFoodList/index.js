import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator, TextInput } from 'react-native'
import DATA from '../../JsonAPI'
import { ICONS } from '../../Utils/Images'
import styles from './styles'

export default class ApprovedFoodList extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      refreshFlatlist: false,

    }
  }

  _onLoadEnd = () => {
    this.setState({
      loading: false
    })
  }

  expandRow(index) {
    DATA.categories[index].isExpanded = !DATA.categories[index].isExpanded,
      DATA.categories = DATA.categories
      , this.setState({ refreshFlatlist: !this.state.refreshFlatlist })
  }

  renderItems(item, index) {
    return (
      <View style={styles.viewCard}>
        <TouchableOpacity style={styles.touchableCard} onPress={() => {
          this.expandRow(index)
        }}>

          <View style={styles.rightSideView}>
            <Image onLoadEnd={this._onLoadEnd} source={{ uri: item.category.imagePath }} resizeMode='cover' style={styles.leftImage} />
            <Text style={[styles.titleText, { color: item.category.colorCode }]}>{item.category.categoryName}
              {item.category.servingSize && <Text style={styles.text2}> ({item.category.servingSize}) </Text>}
            </Text>
          </View>
          {item.isExpanded === true ?
            <Image source={ICONS.upArrow} resizeMode='contain' style={styles.upDownArrow} />
            :
            <Image source={ICONS.downArrow} resizeMode='contain' style={styles.upDownArrow} />
          }
        </TouchableOpacity>
        <View style={styles.dropdownView1}>
          {item.isExpanded === true &&

            item.category.subcategories.map((it) => {
              return (
                <View>
                  {it.subCategoryname !== "" && <View style={styles.viewStyle}>
                    <Text style={[styles.headText, { color: item.category.colorCode }]}>{it.subCategoryname}</Text>
                  </View>}
                  {it.items.map((itm) => {
                    return (
                      <View style={styles.dropdownView}>
                        <Text style={styles.dropdownText}>{itm}</Text>
                      </View>
                    )
                  })}

                </View>
              )
            })
          }
          {item.isExpanded === true &&
            item.category.quote !== "" &&
            <View style={styles.backgroundBottomView}>
              <View style={styles.bottomView}>
                <Text style={styles.bottomText}>{item.category.quote}</Text>
              </View>
            </View>
          }
        </View>
      </View>
    )

  }

  render() {
    const { loading, data } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <TouchableOpacity style={styles.backTouchIcon} onPress={()=>{this.props.navigation.goBack()}}>
            <Image source={ICONS.LeftArrow} style={styles.backIcon}/>
            </TouchableOpacity>
            <Text style={styles.headertextStyle}>
              Approved Foods List
          </Text>
          <View style={styles.searchViewStyle}>
            <Image resizeMode='contain' source={ICONS.Search} style={styles.searchIcon} />
            <TextInput
              placeholder='Search Here...'
              placeholderTextColor={'white'}
              style={styles.textInputStyle}
            />
          </View>
        </View>

        <View style={styles.listCard}>


          <FlatList
            style={styles.flatListStyle}
            data={DATA.categories}
            showsVerticalScrollIndicator={false}
            keyExtractor={(index) => index}
            extraData={this.state.refreshFlatlist}
            renderItem={({ item, index }) =>
              this.renderItems(item, index)
            }
          />
          <ActivityIndicator
            style={styles.activityIndStyle}
            animating={loading}
          />
        </View>
      </View>
    )
  }

}