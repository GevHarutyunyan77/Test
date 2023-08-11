import { useNavigation } from "@react-navigation/native";
import React from "react";

function useContainer() {
  const navigation = useNavigation<any>()


  const handleNavigation = (driver:object)=>{
     navigation.navigate('driverInfo', driver)
  }


  return {
    handleNavigation
  }
}

export default useContainer;
