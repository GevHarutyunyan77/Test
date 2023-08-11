export const GET_DATA_REQUEST = 'GET_DATA_REQUEST'
export const SET_PAGE = 'SET_PAGE'
export const SET_INDEX = 'SET_INDEX'






export function getData(offset:number, limit:number){
    return{
        type: GET_DATA_REQUEST,
        payload: {offset, limit}
    }
}

export function setCurrentPage(page:number){
    return{
        type: SET_PAGE,
        payload: page
    }

}
export function setIndex(index:number){
    return{
        type: SET_INDEX,
        payload: index
    }
}

