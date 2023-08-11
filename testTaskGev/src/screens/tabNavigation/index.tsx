import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, Text, SafeAreaView } from "react-native";
import st from "./style";
import HomeScreen from "../home/index";
import DriversList from "../driversList";
// @ts-ignore
import topImage from "../../assets/images/f1-22.webp";
import { SCREEN_OPTIONS } from "../../constants/navigation";


const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <SafeAreaView style={st.container}>
      <View>
        <Image source={topImage} style={st.imageStyle} />
      </View>

      <Tab.Navigator screenOptions={SCREEN_OPTIONS}>
        <Tab.Screen
          name={"homeScreen"}
          component={HomeScreen}
          options={{ tabBarIcon: () => <Text style={st.text}>TOP</Text> }}
        />
        <Tab.Screen
          name={"driversList"}
          component={DriversList}
          options={{ tabBarIcon: () => <Text style={st.text}>All</Text> }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default TabNavigation;
