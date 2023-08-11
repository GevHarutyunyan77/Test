import React from "react";
import {Linking} from "react-native";

function useContainer() {
  const handleOpenWikipedia = (url:string)=>{
    Linking.openURL(url)
  }
  return {
    handleOpenWikipedia
  }

  ;
}

export default useContainer;
