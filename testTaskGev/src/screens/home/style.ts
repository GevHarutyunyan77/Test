import {StyleSheet} from 'react-native';
import {Sizes} from "../../constants/ratio";

export default StyleSheet.create({
    container:{
      flex:1,
    },
    titlesView:{
      backgroundColor: '#090955',
      width:'100%',
      height: Sizes(30),
      flexDirection:'row'
    },
    positionView:{
      height:'100%',
      width:Sizes(30),
      justifyContent:'center',
      textAlign:'center',
      borderWidth:2,
      borderColor:'grey'
    },
    nameView:{
      height:'100%',
      width:Sizes(120),
      justifyContent:'center',
      textAlign:'center',
      borderWidth:2,
      borderColor:'grey'
    },
    nationalityView:{
      height:'100%',
      width:Sizes(100),
      justifyContent:'center',
      textAlign:'center',
      borderWidth:2,
      borderColor:'grey'
    },
    pointsView:{
      height:'100%',
      width:Sizes(75),
      justifyContent:'center',
      textAlign:'center',
      borderWidth:2,
      borderColor:'grey'
    },


    text:{
      color:'white',
      textAlign:'center'
    }
  });

