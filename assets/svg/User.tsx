import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const User = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={25}
        height={25}
        fill="none"
        {...props}
    >
        <Path fill="url(#a)" d="M0 0h25v25H0z" />
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
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/UlEQVR4nO3cSatcRRQA4NKoGBcKalQQhxDdiguRiAZENOjCpbMLQSWgC/+CS4lgFDUE0ZXDHxDcuJKokTjiGJ4R3AVMNBHBKeonxa2FiFHe8/Wt6qrzwd10N3SfQ3V19alzK6UQQgghhBBCCKuHy/AwXsEH+Ba/lutIeSw/9xC2rOEtxoVTcA/etnpv4W5sqB1H03AzVvx/B7C9djzNwRl43vp7Dhtrx9cEnIf3Lc672JRGZkpy/pov2oFhk22aLhY5kv9pZJ+eRmMxc/J/2ZNGgu3quSUNtE5eqZjoL4ZYZ+Ne9d2Zeod9tbOMN9MAtYsW/IHNqVemAlErdqRemSptrXgp9Qofasd7qVemGnIrvkm9wi/a8XPqlcakXmlM6pXGpF6JOXoeYtUxD7GOngde1o4XU69MjS6t6LrWsaVUzmrLn+HS1DNr60Bab3tT70wtW7XdnnqHDTP1cpzIZ0PsGWa4qWKib0gjMfXFzW13Gg02lu6hubwzZKdSlvvhZpqvcy/HuWlkpmTvX/BIHrPB8QTTyJ4FJHn3sNPFv8GN5Wu+Hku4sVYXa1xn35W7iVb5dz2/di/uwMm141gq2JyLP7kHo/RSHymbB/k6nEud5bkd3dcuQgghhBBCCGEYOAvX4EE8iddKBS6XUw/hp3IdKnWRfeU1u/AAtuLM2nE0BxeUDdsX8JX1c7DcnZvrJuenEeFK7MSn5pELTh/jMVyReoaL8Ug5nqe2XEZ9FJenXuA6vNpIh9Lf5c/0Om7FSWnZ4DTcj08sj49wH05Ny6CMji8trxXc1uwIx9VlV6QXb+Cq1NixEPmH5Tf9+R1PVZ9O8vZROWuud/vzgQG1knw9jhnHUWybO8nbyt/g0fyIa+dK8jllB3pUh3H2HIl+onakDXh8jkTXPHiqFZ/Pkeg8T43uhzkS/XXtKBtwcI5EP107ygbsmiPRF+I74zqGixae6L/c7PO98RydvR24dHo+W1Yhx/XreInxGVwya5JDCCGEEEIIIYQQUpv+BAvyywawutiQAAAAAElFTkSuQmCC"
                id="b"
                width={90}
                height={90}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default User
