import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {Sizes} from "../../constants/ratio";

function RightArrow(props:any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={Sizes(16)}
            height={Sizes(20)}
            viewBox="0 0 24 24"
            fill={props.disable==='last'?'#afabab': 'blue'}
            {...props}
        >
            <Path d="M7.293 4.707L14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707z" />
        </Svg>
    )
}

export default RightArrow
