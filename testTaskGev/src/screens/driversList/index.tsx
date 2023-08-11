import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import Pagination from "../../components/Pagination";
import st from "./style";
import DriversAll from "../../components/DriversAll";
import {isEmpty, uniqueId} from "lodash";
import useContainer from "./hook";

function DriversList() {
 const {allDriversList, renderItem} = useContainer()
  return (
   <SafeAreaView style={st.container}>
       <Pagination/>
     {
       !isEmpty(allDriversList) &&
       <FlatList
         data={allDriversList}
         renderItem={renderItem}
         keyExtractor={() => uniqueId()}
       />
     }
   </SafeAreaView>
  );
}

export default DriversList;
