import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import { isEmpty, uniqueId } from 'lodash';

import useContainer from "./hook";
import st from './style';

function HomeScreen() {
  const {renderItem, topDriversData} = useContainer();

  return (
    <SafeAreaView style={st.container}>
      <View style={st.titlesView}>
        <View style={st.positionView}>
          <Text style={st.text}>#</Text>
        </View>
        <View style={st.nameView}>
          <Text style={st.text}>Name</Text>
        </View>
        <View style={st.nationalityView}>
          <Text style={st.text}>Nationality</Text>
        </View>
        <View style={st.pointsView}>
          <Text style={st.text}> Team</Text>
        </View>
        <View style={st.pointsView}>
          <Text style={st.text}>Points</Text>
        </View>
      </View>
      {!isEmpty(topDriversData) && (
        <FlatList
          data={topDriversData}
          renderItem={renderItem}
          keyExtractor={() => uniqueId()}
        />
      )}
    </SafeAreaView>
  );
}

export default HomeScreen;
