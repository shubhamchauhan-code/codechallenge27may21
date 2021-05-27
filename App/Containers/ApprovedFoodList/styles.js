import { StyleSheet } from 'react-native';
import { COLORS } from '../../Utils/Colors';
import Dimension from '../../Utils/Dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WhiteColor
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: "white"
      },
      text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
      },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: Dimension.getHeight(8)
    },
    activityIndStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    headerStyle: {
        top: 0,
        left: 0,
        right: 0,
        height: Dimension.getHeight(28),
        paddingTop: Dimension.getHeight(1.5),
        borderBottomLeftRadius: Dimension.getWidth(10),
        borderBottomRightRadius: Dimension.getWidth(10),
        backgroundColor: COLORS.PrimaryDarkColor,
    },
    logoStyle: {
        width: Dimension.getWidth(25),
        height: Dimension.getHeight(15),
        alignSelf: 'center',
    },
    flatListStyle: {
        backgroundColor: 'white',
        borderBottomLeftRadius: Dimension.getWidth(10),
        borderTopRightRadius: Dimension.getWidth(10),
    },
    backTouchIcon:{
        position:'absolute',
        width: 25,
        height: 25,
        margin: Dimension.getWidth(5)
    },
    backIcon:{
        position:'absolute',
        width: 25,
        height: 25,
       
    },
    headertextStyle: {
        fontSize: Dimension.normalize(22),
        color: COLORS.WhiteColor,
        fontWeight: 'bold',
        alignSelf:'center'
    },
    
    listCard: {
        flex: 1,
        backgroundColor: COLORS.WhiteColor,
        elevation: 20,
        alignSelf: 'center',
        width: Dimension.getWidth(95),
        paddingTop: Dimension.getHeight(3),
        borderTopRightRadius: Dimension.getWidth(10),
        marginTop: Dimension.getHeight(-7)
    },
    touchableCard: {
        padding: 10,
        backgroundColor: COLORS.WhiteColor,
        elevation: 6,
        flexDirection: 'row',
        width: Dimension.getWidth(90),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    viewCard:{
        marginBottom:10,
    },
    rightSideView: {
        width: Dimension.getWidth(60),
        flexDirection:'row',
        alignItems:'center'
    },
    leftImage: {
        width: Dimension.getWidth(7),
        height: Dimension.getHeight(4),
    },
    titleText: {
        fontSize: Dimension.normalize(12),
        color: COLORS.PrimaryColor,
        marginLeft: 10
    },
    text2: {
        fontSize: Dimension.normalize(12),
        fontWeight: 'bold',
        color: COLORS.PrimaryDarkColor,
    },
    rowView: {
        flexDirection: 'row',
        marginTop: 5,
    },
    upDownArrow:{
        width:10,
        height: 10
    },
    textStyle: {
        fontSize: Dimension.normalize(12),
        fontWeight: 'bold',
        marginLeft: Dimension.getWidth(6),
        color: COLORS.PrimaryDarkColor
    },

    searchViewStyle:{
        flexDirection:'row',
        borderWidth: 1,
        width: Dimension.getWidth(90),
        alignItems:'center',
        marginTop: Dimension.getHeight(2),
        paddingLeft: 10,
        borderRadius: 10,
        borderColor: COLORS.WhiteColor,
        alignSelf:'center'
    },
    searchIcon:{
        width: 20,
        height: 20
    },
    textInputStyle:{
        height: Dimension.getHeight(6),
        fontSize: Dimension.normalize(14),
        marginLeft: 5
    },
    dropdownView:{
        padding:9,
        paddingVertical:12,
        borderTopColor: COLORS.LightGrayColor,
        borderTopWidth:0.5,
        width: Dimension.getWidth(90),
        alignSelf:'center',
        backgroundColor:'white',
       
    },
    headText:{
        fontSize: Dimension.normalize(14),
        fontWeight: 'bold',
        marginLeft: Dimension.getWidth(4),
        marginVertical: Dimension.getHeight(1)
    },
    dropdownView1:{
        width: Dimension.getWidth(90),
        alignSelf:'center',
         elevation:  6,
        backgroundColor: COLORS.WhiteColor    
    },
    viewStyle:{
      borderTopWidth:0.5,
      borderTopColor: COLORS.LightGrayColor
    },
    dropdownText:{
        fontSize: Dimension.normalize(10),
        marginLeft: Dimension.getWidth(4)
    },
    bottomView:{
        paddingVertical:Dimension.getHeight(2),
        backgroundColor: COLORS.ShadeColor,
        width: Dimension.getWidth(70),
        alignSelf:'center',
        borderRadius:6,
      
    },
    bottomText:{
        fontSize: Dimension.normalize(10),
        color: COLORS.PrimaryDarkColor,
        textAlign:'center',
    },
    backgroundBottomView:{
        width: Dimension.getWidth(90),
        backgroundColor: COLORS.WhiteColor,
      //  elevation: 15,
        alignSelf:'center',
        borderTopWidth:0.5,
        paddingVertical: 15,
        borderColor: COLORS.LightGrayColor

    }
    

})

export default styles