import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const Plus = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={40}
        height={40}
        fill="none"
        {...props}
    >
        <Path fill="url(#a)" d="M0 0h40v40H0z" />
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
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB60lEQVR4nO3bwU4TYRRH8e4QFfUdAH08lMSYKC5MeDowbBBUSuIjiIkuySFjJ1FI0Zlk+v/6zZxf0k03vXNW0+Te2UySJEnS6AGbwIPSc4wS8Aw4BL7xxyXwAXhaer5RAF7cCXxXE/x56TmrBjwG5vzfV+BR6XmrBbyhu9el560WcNIj9MfS81YL+NUj9M/S81aLnkrPWy0MnYGhMzB0BobOwNAZGDoDQ2dg6AwMnYGhMzB0BobOwNAZGDoDQ2dg6AwMnYGhMzB0BobOwNAZGDqDqYZu9tuA/WYrCPjB9Fy1z/5qZbt+zcYmcF76SdfIGbCziq1OIy/fYh1uPxt4v+RHtHAwZOhm2VvLzYeKvAFc3/Mj4nebDUPXErqN3eW8Yarmg0RuQx+Ufpo19nbo17vmvVG3fQGeDBa6jb1j7FtOge1BI/8V+yHwEjhu/45OzRVwBOw1LWZjQU+l560Whs7A0BkYOgNDZ2DoDAydgaEzMHQGhs7A0BkYOgNDZ2DoDAydgaEzMHQGhs7A0BkYOgNDZ2DoDAydgaEz6Lek8730vNVicZjT1VHpeavF4gKsq73S89Z+bnfWIfKnUe3ClQDsAp//Efl8ZVudUwNsAe/ay4Pr9nPRfrdVer5RYnFTM8zNiCRJkqTZOrsBJgs9CnhLQkwAAAAASUVORK5CYII="
                id="b"
                width={90}
                height={90}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default Plus;
