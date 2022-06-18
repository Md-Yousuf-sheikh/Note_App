import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = () => (
    <Svg
        viewBox="0 0 49.656 49.656"
        style={{
            width: 20,
            height: 20
        }}
        xmlSpace="preserve"
    >
        <Path
            style={{
                fill: "#00ad97",
            }}
            d="m35.121 1.414 2.828 2.828-20.585 20.586 20.585 20.586-2.828 2.828-23.414-23.414z"
        />
        <Path
            style={{
                fill: "#00ad97",
            }}
            d="m35.122 49.656-24.83-24.828L35.121 0l4.242 4.242-20.585 20.586 20.586 20.586-4.242 4.242zM13.121 24.828l22.001 22 1.414-1.414L15.95 24.828 36.535 4.242l-1.414-1.414-22 22z"
        />
    </Svg>
)

export default SvgComponent
