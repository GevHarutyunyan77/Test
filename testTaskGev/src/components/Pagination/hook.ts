import React, {useState} from 'react';
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";
import { setCurrentPage, setIndex } from "../../store/actions/pagination";

function useContainer() {
    const dispatch = useDispatch()
    const [disable, setDisable] = useState('first')
    const {currentPage, totalPages, index} = useSelector((state: any) => state.pagination)

    const renderArray = (count: number) => {
        let arr = []
        for (let i: number = 1; i <= count; i++) {
            arr.push(i)
        }
        return _.chunk(arr, 5)
    }

    const data = renderArray(totalPages)

    const handlePages = (page:number | null, type?:string)=>{
        if(page){
            dispatch(setCurrentPage(page))
        }
        if(type === 'minus'){
            if (index !== 0) {
                dispatch(setIndex(index-1))
                // setIndex(index - 1)
                dispatch(setCurrentPage(data[index - 1][0]))
            }
            if (index == 1) {
                setDisable('first')
            }
        }
        if (type === 'plus'){
            if (index !== data.length - 1) {
                dispatch(setIndex(index+1))
                // setIndex(index + 1);
                dispatch(setCurrentPage(data[index + 1][0]))
                setDisable('')
            }
            if (index === data.length - 2) {
                setDisable('last')
            }
        }
    }

    return {
        index,
        currentPage,
        data,
        handlePages,
        // handleActiveNum,
        // handleIndexMin,
        // handleIndexPlus,
        disable
    }

}

export default useContainer;


// const handleActiveNum = (num: number) => {
//     dispatch(setCurrentPage(num))
// }
//
// const handleIndexMin = () => {
//     if (index !== 0) {
//         setIndex(index - 1)
//         dispatch(setCurrentPage(data[index - 1][0]))
//     }
//     if (index == 1) {
//         setDisable('first')
//     }
// }
//
// const handleIndexPlus = () => {
//     if (index !== data.length - 1) {
//         setIndex(index + 1);
//         dispatch(setCurrentPage(data[index + 1][0]))
//         setDisable('')
//     }
//     if (index === data.length - 2) {
//         setDisable('last')
//     }
// }
