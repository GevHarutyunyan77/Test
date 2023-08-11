import { combineReducers} from "redux";
import app from './app'
import pagination from "./pagination";
const reducers = combineReducers({app, pagination})
export default reducers;
