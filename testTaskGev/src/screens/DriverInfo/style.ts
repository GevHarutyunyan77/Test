import { StyleSheet } from "react-native";
import { Sizes } from "../../constants/ratio";

export default StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'rgba(150,131,131,0.83)'
  },
  image:{
    marginTop: Sizes(20),
    marginBottom:Sizes(50),
    width:Sizes(300),
    height:Sizes(180)
  },
  textContainer:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    marginTop:Sizes(10)
  },
  label:{

    marginLeft:10,
    width:150,
    fontSize:Sizes(16),
    color:'white'
  },

  text: {
    fontSize:Sizes(22),
    color:'white'
  },

  moreInfo:{
    width:'100%',
    height:100,
    marginTop:20,
    alignItems:'center',
    flexDirection:'row'
  },
  searchView:{
    marginLeft:Sizes(20),
    width:Sizes(100),
    height:Sizes(70),
    // borderWidth:Sizes(3),
    // borderColor: '#6c6ce0',
    // borderRadius:Sizes(20),
    justifyContent:'center',
    alignItems:'center',

  }


})
