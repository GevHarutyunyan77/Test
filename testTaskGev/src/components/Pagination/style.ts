import {StyleSheet} from "react-native";
import {Sizes} from "../../constants/ratio";

export default StyleSheet.create({
    container:{
        width: Sizes(250),
        height:Sizes(30),
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:Sizes(2),
        flexDirection:'row',
        justifyContent:'space-between'
    },
    arrowView:{
        width:Sizes(30),
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },

    numView:{
        width:Sizes(30),
        height:'100%',
        backgroundColor:'white',
        borderWidth:Sizes(1),
        borderColor:'#1e4fc2',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    disabledView:{
        width:Sizes(30),
        height:'100%',
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',

    },

    activeNum:{
        width:Sizes(30),
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1e4fc2',
        borderRadius:10,
    },

    text:{
        color:'#1e4fc2',
        fontSize:Sizes(16)
    },
    activeText:{
        color:'white',
        fontSize:Sizes(16)
    }
})



