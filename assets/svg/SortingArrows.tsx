import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const SortingArrows = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={30}
        height={30}
        fill="none"
        {...props}
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
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3klEQVR4nO2czW7TQBSFb7LgR+pjZOXlPZvs8nikLCiCShSQmndgUXggyo+EAFFFLI2mGQSKnMQOZXyPfT7Jmzi173yaztiTuddMCCGEEEIIIYQQA2BqZpO+gxgs8/n8IYDX7v4zHQBeLRaLBxaMqqruufspgA8Art19mT4zBmaz2X13vwJQ/324+1U6Z4FIYhviXFp0Um8A8GY7ePw53kXq2bknb4v+aOSS62iy03DREN97Yxsudh0eZBhpGjoAPLIhSEYg2XkyXOaeHXcy7DBc1NGHkbDcgeRasstJriW7nORaso+Y+Pad9xZ/2/cEydKTb3vlrvNVh2vYGGnbk3/3xl3fsSOuNaq1Dnd/3kXMPtEdnr2f2sjWOqYA1l163yHRLWXf/O8l1h2v4NfWE9O81Nn6X7yN6EOy0z3zevZoRKeAVl3G0baiD8i+tLGtdVRVdZJk5559A+Bs32TVRXQiXSuNyena+R6X6Z424rWOVmNmV9Fb19dPX235B9GiCxJdCIkuhEQXglD01BhhET3f7D85B/A9HWmpIX1mLLCIxubZfftF7ImxwCLa3T81xPnZWGARDZI46RsAkjjpGwCSOOkbAJI46RsAkjjpGwCSOOkbAJI46RsAkjjpGwCSOOkbAJI46RsAkjjpGwCSOHcC4FtDA75aMIYg+nw7eHd/ZsGgF50Wz939Im8lW7v7i4gL6vSiWfZpYECiQwOJLoNEF0KiCyHR8UVPQ+wF6Ss3ZL7Zp/EyP1J+AfD4rrcX5zSTdd5evCqxvThcbgg2kktvmF9ZX/SUsjDJm+QHlwISLjfE3X8MMakpXG4IgLMhpumFyw2ZDTTxNCSVUqnLkQSoOEAhVO6iICrgUhCVJCrIYItshauDYe0mSLqJL1odjGNlh5YcveZnRVjak7bmZ0VWrJanDkYD+c3wLd1wwVIHo0H27Q8FeTH/gqInEzOJvP9ECCGEEEIIIYQQ1pZfRvtRhGExi90AAAAASUVORK5CYII="
                id="b"
                width={90}
                height={90}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default SortingArrows;
