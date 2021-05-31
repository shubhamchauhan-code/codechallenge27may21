import { StyleSheet } from 'react-native';
import { COLORS } from '../../Utils/Colors';
import Dimension from '../../Utils/Dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WhiteColor,
    },
    spinnerTextStyle:{
        fontSize: Dimension.normalize(16),
        color:COLORS.BlackColor
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: Dimension.getHeight(5)
    },
    headerStyle: {
        top: 0,
        left: 0,
        right: 0,
        height: Dimension.getHeight(9),
        justifyContent: 'center'
    },
    headerBackIconTouchableStyle: {
        position: 'absolute',
        left: 0,
        top: Dimension.getHeight(2.2),
    },
    headerBackIconStyle: {
        color: COLORS.WhiteColor,
        marginLeft: 5,
        fontSize: Dimension.normalize(26)
    },
    headertextStyle: {
        fontSize: Dimension.normalize(18),
        color: COLORS.WhiteColor,
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    iconImage: {
        height: Dimension.getWidth(5),
        width: Dimension.getWidth(5)
    },
    topLeftIcon: {
        position: 'absolute',
        left: Dimension.getWidth(2),
    },
  
    midView: {
        flex: 1,
    },
    profileImgStyle: {
        width: Dimension.getWidth(26),
        height: Dimension.getWidth(26),
        borderRadius: Dimension.getWidth(26),
        elevation: 20,
        position:'absolute',
        zIndex: 99,
        alignSelf:'center',
        top: Dimension.getHeight(-8)
    },
    profileImg:{
        width: Dimension.getWidth(26),
        height: Dimension.getWidth(26),
        borderRadius: Dimension.getWidth(26),
        position:'absolute',
        zIndex: 99,
    },
    midCard:{
      flex:1
    },
    card: {
        padding: 10,
        backgroundColor: COLORS.WhiteColor,
        elevation: 15,
        marginTop: Dimension.getHeight(2),
        width: Dimension.getWidth(90),
        alignSelf: 'center',
        borderRadius: 6
    },
    card1: {
        padding: 10,
        backgroundColor: COLORS.WhiteColor,
        elevation: 15,
        width: Dimension.getWidth(90),
        alignSelf: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth:0.5,
    },
    titleText: {
        fontSize: Dimension.normalize(14),
        color: COLORS.PrimaryDarkColor,
        fontWeight: 'bold'
    },
    descriptionText: {
        fontSize: Dimension.normalize(12),
        fontWeight: 'bold',
        color: COLORS.BlackColor
    },
    flatListStyle: {
        backgroundColor: 'white'
    },
    commText:{
      fontSize: Dimension.normalize(14),
      fontWeight: 'bold' ,
      marginLeft: 20, 
      marginVertical: 5 
    },
    commentName:{
        fontSize: Dimension.normalize(12),
        color: COLORS.PrimaryColor,
        fontWeight: 'bold',
    },
    commentEmail:{
        fontSize: Dimension.normalize(11),
        color: 'grey',
        fontWeight: 'bold'
    },
    commentBody:{
        fontSize: Dimension.normalize(10),
        color: COLORS.BlackColor,
        letterSpacing: 0.2
    }
   
})

export default styles