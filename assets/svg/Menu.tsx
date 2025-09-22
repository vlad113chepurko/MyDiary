import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const Menu = ( props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={30}
        height={30}
        fill="none"
        { ...props }
    >
        <Path fill="url(#a)" d="M0 0h30v30H0z" />
        <Defs>
            <Pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#b" transform="scale(.01111)" />
            </Pattern>
            <Image
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyUlEQVR4nO3ZOwrCUBQE0GCny7nTZJ1+0FWqjbZKwFp4gskTz4Hp86a4KWYYAAAAAAAAAFhOkk2SQ5JrkofkXS5J9uM4rpuLrqpTBw94/FKmzlp7XlXVfekPz+/lNnWn6PRXtNOR9lTVsfV0DNNhr6rd69Av/oj0nXNVbT/6GQIAAAAA/DnjbFpinM2MMc5mthhn02nRTkfaY5zN12OcBQAAAAD4kHE2LTHOZsYYZzNbjLPptGinI+0xzubrMc4CAAAAAAAADB14AvoSp9iLV98JAAAAAElFTkSuQmCC"
                id="b"
                width={90}
                height={90}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default Menu;
