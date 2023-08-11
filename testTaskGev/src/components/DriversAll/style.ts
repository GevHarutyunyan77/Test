import { StyleSheet } from "react-native";
import { Sizes } from "../../constants/ratio";

export default StyleSheet.create({
  container: {

    width: "100%",
    height: Sizes(30),
    flexDirection: "row",
justifyContent:'space-between',
    alignItems:'center',
    marginTop:Sizes(7),
    borderWidth:0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  leftView:{
    flexDirection: "row",
    height:'100%',
    alignItems:'center',

  },

  flagStyle: {
    width: Sizes(30),
    height: "80%",
    marginLeft:10,
    marginRight: 30
  },

  text:{
    color:'black',
    fontSize:Sizes(20)
  },
  icon:{
    height:"100%",
    width:Sizes(50),
  },

  raceButton:{
    height:'100%',
    paddingLeft:Sizes(20),
    paddingRight:Sizes(20)


  }

});
