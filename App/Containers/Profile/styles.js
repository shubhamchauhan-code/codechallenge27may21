import { StyleSheet } from 'react-native';
import { COLORS } from '../../Utils/Colors';
import Dimension from '../../Utils/Dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WhiteColor,
        justifyContent:'center'
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
        position:'absolute',
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
        backgroundColor: COLORS.WhiteColor,
        width: Dimension.getWidth(92),
        elevation: 13,
        alignSelf: 'center',
        paddingVertical: Dimension.getHeight(7),
        borderRadius: Dimension.getWidth(4),
    },
    textView:{
        alignSelf:'center'
    },
    titleTextStyle:{
        fontSize: Dimension.normalize(14),
        color: COLORS.PrimaryColor,
        fontWeight: 'bold',
        marginBottom: Dimension.getHeight(2.5),
    },
    infoTextStyle:{
        fontWeight: 'bold',
        color: COLORS.BlackColor,
        fontSize: Dimension.normalize(13),
    },
    changePassStyle:{
        fontSize: Dimension.normalize(13),
        textDecorationLine: 'underline',
        color: COLORS.PrimaryColor,
        alignSelf:'flex-end',
        fontWeight:'bold',
        marginRight: Dimension.getWidth(3),
        marginTop: Dimension.getHeight(3)
    }
   
})

export default styles