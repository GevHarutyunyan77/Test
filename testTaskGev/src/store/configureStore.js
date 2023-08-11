import {legacy_createStore as createStore, applyMiddleware} from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistStore, persistReducer} from "redux-persist";
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware];

const persistConfig = {
  key:'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer )



const store = createStore(persistedReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
let persistor = persistStore(store)

export default store;
export {persistor}
