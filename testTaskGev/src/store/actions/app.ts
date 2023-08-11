export const GET_DATA_REQUEST = 'GET_DATA_REQUEST'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'

export const GET_TOP_DRIVERS_REQUEST = 'GET_TOP_DRIVERS_REQUEST'
export const GET_TOP_DRIVERS_SUCCESS = 'GET_TOP_DRIVERS_SUCCESS'

export const GET_ALL_DRIVERS_REQUEST = 'GET_ALL_DRIVERS_REQUEST'
export const GET_ALL_DRIVERS_SUCCESS = 'GET_ALL_DRIVERS_SUCCESS'



export function getTopDrivers(){
  return{
    type: GET_TOP_DRIVERS_REQUEST,
    payload: {}
  }
}



export function getAllDriversList(pageNumber:number){
  return{
    type: GET_ALL_DRIVERS_REQUEST,
    payload:pageNumber
  }
}
