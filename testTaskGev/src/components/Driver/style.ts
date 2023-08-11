import {StyleSheet} from "react-native";
import {Sizes} from "../../constants/ratio";

export default StyleSheet.create({
    container: {
        width: '100%',
        height: Sizes(30),
        flexDirection: 'row'
    },
    positionView: {
        height: '100%',
        width: Sizes(30),
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'black'
    },
    text: {
        width: '100%',
        color: 'black',
        textAlign: 'center',
        fontSize: Sizes(11),
        lineHeight: 12
    },
    nameView: {
        height: '100%',
        width: Sizes(120),
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'black'
    },
    nationalityView: {
        height: '100%',
        width: Sizes(100),
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'black'
    },
    pointsView: {
        height: '100%',
        width: Sizes(75),
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'black'
    }
})



