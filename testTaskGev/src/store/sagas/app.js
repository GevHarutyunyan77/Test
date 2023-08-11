import { GET_ALL_DRIVERS_REQUEST, GET_TOP_DRIVERS_REQUEST, GET_TOP_DRIVERS_SUCCESS, GET_ALL_DRIVERS_SUCCESS } from "../actions/app";
import {takeLatest, put, call} from 'redux-saga/effects'
import axios from "axios";
import  {PAGINATION_LIMIT } from '../../constants/limit'

export default function* watcher(){
  yield takeLatest(GET_TOP_DRIVERS_REQUEST, handleGetTopDriversList)
  yield takeLatest(GET_ALL_DRIVERS_REQUEST, handleGetAllDriversList)


}

function *handleGetTopDriversList(){
  try{
     const {data} = yield call( ()=> axios.get('https://ergast.com/api/f1/current/driverStandings.json'))

    yield put({
      type: GET_TOP_DRIVERS_SUCCESS,
      payload: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    })
  } catch (e){
    console.log(e);
  }
}

function *handleGetAllDriversList(action){
  let offset = action.payload
  if(offset !==0) offset *= PAGINATION_LIMIT

  try{
    const {data} = yield call( ()=> axios.get(`https://ergast.com/api/f1/drivers.json?offset=${offset}&limit=${PAGINATION_LIMIT}`))
    yield put({
      type: GET_ALL_DRIVERS_SUCCESS,
      payload: {data: data.MRData.DriverTable.Drivers, totalPages: data.MRData.total}
    })
  } catch (e){
    console.log(e);
  }
}
