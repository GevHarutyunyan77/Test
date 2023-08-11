import {StyleSheet} from 'react-native';
import {Sizes } from "../../constants/ratio";

export default StyleSheet.create({
    container:{
      flex:1,

    },
    imageStyle:{
      width: '100%',
      height: Sizes(230),
    },

    logo:{
      width: Sizes(150),
      height:'100%'
    },
    text:{
      fontSize:Sizes(30),
      color:'black'
    }

  });


