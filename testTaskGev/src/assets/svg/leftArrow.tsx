import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {Sizes} from "../../constants/ratio";

function LeftArrow(props:any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={Sizes(16)}
            height={Sizes(20)}
            viewBox="0 0 24 24"
            fill={props.disable==='first'?'#afabab': 'blue'}
            {...props}
        >
            <Path d="M15.293 3.293L6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293z" />
        </Svg>
    )
}

export default LeftArrow
