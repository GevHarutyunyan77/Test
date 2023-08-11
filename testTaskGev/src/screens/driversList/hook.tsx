import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllDriversList} from "../../store/actions/app";
import DriversAll from "../../components/DriversAll";



function useContainer() {
    const dispatch = useDispatch()
    const {currentPage} = useSelector((state: any) => state.pagination)
    const {allDriversList} = useSelector((state: any) => state.app)

    const renderItem = ({item}: any) => {
        return (
            <DriversAll {...item}/>
        )
    };


    useEffect(() => {
        dispatch(getAllDriversList(currentPage - 1))
    }, [currentPage])


    return {
        allDriversList,
        renderItem
    }
}

export default useContainer;
