import React from "react";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import store, {persistor} from "./src/store/configureStore";
import TabNavigation from "./src/screens/tabNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import DriverInfo from "./src/screens/DriverInfo";

const Stack = createNativeStackNavigator()



function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown:false}}>
                  <Stack.Screen name={'tabNavigation'} component={TabNavigation}/>
                  <Stack.Screen name={'driverInfo'} component={DriverInfo}/>
                </Stack.Navigator>
              </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

export default App;
