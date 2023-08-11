import React from 'react';
import {View, Text, Pressable} from 'react-native';
import st from './style';
import _ from 'lodash'
import useContainer from "./hook";
import LeftArrow from "../../assets/svg/leftArrow";
import RightArrow from "../../assets/svg/rightArrow";

function Pagination() {
    const {
        index,
        currentPage,
        data,
        disable,
        // handleActiveNum,
        // handleIndexMin,
        // handleIndexPlus,
      handlePages
    } = useContainer()



    return (
        <View style={st.container}>
            <Pressable style={st.arrowView} onPress={()=>handlePages(null, 'minus')}>
                <LeftArrow disable={disable}/>
            </Pressable>

            {!_.isEmpty(data[index]) && data[index].map((item: any) => {
                return (
                    <Pressable key={_.uniqueId()} style={currentPage === item ? st.activeNum : st.numView}
                               onPress={() => handlePages(item)}>
                        <Text style={currentPage === item ? st.activeText : st.text}>{item}</Text>
                    </Pressable>
                )
            })}


            <Pressable style={st.arrowView}
                       onPress={()=>handlePages(null,'plus')}>
                <RightArrow disable={disable}/>
            </Pressable>
        </View>


    );
}

export default Pagination;
