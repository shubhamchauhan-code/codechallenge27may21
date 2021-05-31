import { StyleSheet } from 'react-native';
import { COLORS } from '../../Utils/Colors';
import Dimension from '../../Utils/Dimension';

const styles = StyleSheet.create({
    container: { flex: 1 },
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
    flatListStyle: {
        backgroundColor: 'white'
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
})

export default styles