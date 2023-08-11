import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import st from "./style";

import useContainer from "./hook";

interface DriverProps {
  name: string,
  surname:string,
  position: string,
  country: string
  team: string,
  points: string,
  dateOfBirth: string
  driverId: string
  url: string
}

function Driver({ position, name, surname, country, team, points, driverId, url, dateOfBirth }: DriverProps) {

  const { handleNavigation } = useContainer();

  return (
    <TouchableOpacity style={st.container}
                      onPress={() => handleNavigation({ name, surname,  country, driverId, url, dateOfBirth })}>
      <View style={st.positionView}>
        <Text style={st.text}>{position}</Text>
      </View>
      <View style={st.nameView}>
        <Text style={st.text}>{name} {surname}</Text>
      </View>
      <View style={st.nationalityView}>
        <Text style={st.text}>{country}</Text>
      </View>
      <View style={st.pointsView}>
        <Text style={st.text}>{team}</Text>
      </View>
      <View style={st.pointsView}>
        <Text style={st.text}>{points}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Driver;
