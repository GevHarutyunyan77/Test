import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import SearchSVG from "../../assets/svg/search";

import flags from "../../constants/flags";
import st from "./style";
import useContainer from "./hook";

function Index({ route }: any) {
  const {
    name,
    surname,
    country,
    driverId,
    url,
    dateOfBirth,
  } = route.params;

  const {handleOpenWikipedia} = useContainer()

  return (
    <SafeAreaView style={st.container}>
      <Image source={{ uri: flags[country] }} style={st.image} />
      <View style={st.textContainer}>
        <Text style={st.label}>Name:</Text>
        <Text style={st.text}>{name}</Text>
      </View>

      <View style={st.textContainer}>
        <Text style={st.label}>Surname:</Text>
        <Text style={st.text}>{surname}</Text>
      </View>

      <View style={st.textContainer}>
        <Text style={st.label}>Nationality:</Text>
        <Text style={st.text}>{country}</Text>
      </View>

      <View style={st.textContainer}>
        <Text style={st.label}>Date of Birth:</Text>
        <Text style={st.text}>{dateOfBirth}</Text>
      </View>

      <View style={st.moreInfo}>
        <Text style={st.label}>More Information</Text>
        <TouchableOpacity style={st.searchView} onPress={()=>handleOpenWikipedia(url)}>
          <SearchSVG />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Index;
