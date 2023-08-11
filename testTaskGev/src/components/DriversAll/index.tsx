import React from "react";
import {Image, Pressable, Text, TouchableOpacity, View} from "react-native";
import st from './style'
import flags from "../../constants/flags";

import useContainer from "./hook";

interface FLAGS {
    dateOfBirth: string,
    driverId: string,
    familyName: string,
    givenName: string,
    nationality: string,
    url: string
}


function DriversAll({dateOfBirth, driverId, familyName, givenName, nationality, url}: FLAGS) {
    const {handleNavigation} = useContainer();


    return (
        <Pressable style={st.container} onPress={()=>{handleNavigation({name:givenName, surname:familyName,country:nationality, driverId, url,dateOfBirth})}}>
            <View style={st.leftView}>
                <Image source={{uri: flags[nationality]}} style={st.flagStyle}/>
                <Text style={st.text}>{givenName}{familyName}</Text>
            </View>

            <View style={st.raceButton} >
                <Image source={require('../../assets/images/race2.jpeg')} style={st.icon}/>
            </View>
        </Pressable>
    );
}

export default DriversAll;


