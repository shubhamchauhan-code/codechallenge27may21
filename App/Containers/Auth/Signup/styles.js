import { StyleSheet } from 'react-native'
import { COLORS } from '../../../Utils/Colors';
import Dimension from '../../../Utils/Dimension';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    container2: {
        width: Dimension.getWidth(100),
        height: Dimension.getHeight(25),
    },
    container3: {
        width: Dimension.getWidth(85),
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        elevation: 30,
    },
    linear: {
        width: Dimension.getWidth(85),
        borderRadius: 30,
        paddingHorizontal: Dimension.getWidth(5),
        paddingVertical:  Dimension.getHeight(5),
    },
    textLogin: {
        fontSize: Dimension.normalize(18),
        fontWeight: 'bold',
        color: COLORS.WhiteColor,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    input: {
        width: Dimension.getWidth(70),
        height: Dimension.getHeight(7),
        alignSelf: 'center',
        fontSize: Dimension.normalize(14),
        borderBottomColor: COLORS.WhiteColor,
        borderBottomWidth: 1,
        paddingLeft: 10,
        marginVertical: 15,
        color: COLORS.TextColor
    },
    row: {
         flexDirection: 'row',
        marginTop: Dimension.getHeight(7),
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: Dimension.getWidth(5),
    },
    btn: {
        width: Dimension.getWidth(30),
        height: Dimension.getWidth(8),
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.WhiteColor,
        justifyContent: 'center',
        borderRadius: 40,
        elevation: 20,

    },
    btnTxt: {
        fontSize: Dimension.normalize(14),
        fontWeight: 'bold',
        color: COLORS.PrimaryColor,
        textTransform: 'uppercase'
    },
    signupText: {
        fontSize: Dimension.normalize(14),
        fontWeight: 'bold',
        color: COLORS.WhiteColor,
        textTransform: 'uppercase'
    },
})

export default styles