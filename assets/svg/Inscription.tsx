import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const Inscription = (props: any) => (
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
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQElEQVR4nO2cPWsUURSGxzSKYhlwVTSxtNHSziqYFFbW/oSoEbIKgqCrRVob0VIUez9+gDZRUNHCWPkFQn5AEtxUjxwyYRfZmbk7mT33Y85Th9z3PjmcmXuY3CwzDMMwDMMwDMMwDMMwMuAAcBV4D2ySLpvAO+AKsF9b8nHgC+3js+xds5LbKHlY9uQrO28XbWdRQ7T05LazqiF6w/cuA2BDQ7QBmGglTLQSJloJE62EiVbCRCthopUw0S0W3QeWgU4WGJIJ6ALbKYhezgIHuJGC6CNZ4EjGFER3ssABjqUgupsFDnAzlYdhFziaBYZkyvtzEg/DJDHRSphoJUy0EiZaCROthIlWwkQrYaJbLLrvY0y6lxGoCxobiGpMSo0RqAsawaMak1JjBOqCRvCoxqTUGIG6oBE8qjEpNUagLmgEj2JMyh5GoC5obMDARKthopUw0YPnwgPgHHAIOAicBi4Bt4BnwEdgi5qYaPgDnHXcyz5gBpgHrgOv8j9SJW0Xve0quWR/08CLqoWaM1ocJGQeNrRHqfT7ZQs1sU5ViJA53/Be7xUt1OQ6RYuHzPQE9nt31EJNrzNq4ei+JgW+AW+AR8A14AJwUlpE3crWCB3d16TA24Js8s+pH4AnIn4c2Rqho/uaFHjskPM3MFvxe+6ELLoz8VDVmZccszrL1ggd3dek7BxIXPnh0kY0Qkf3NSk7pz+alK0ROmS2gKkRmadqXEckbeSUH8vhi6aoEoFPjI8/2YTPfEHupzV/308vbYTwWSrIPQv8ikY24fOyJPuJ/EFH8G2E8OmXzTyiqWzi4HXZHCOKyiYeehX72Gtlz5joASsVe5HK/k6IlR3hdWwrUcqO9ILBnsMRPaw2kt86GyO9qGTLBaj5Ragx0puQbHmlnGtU9NC1xiZ7IHmhccn/VfaiXIga4QOy5yBb2oFfyW2A6rcR+Vjnou+cSUBxZVdWsvTsiR9qEpfdd5C8kP/c5E+QicrujyF5lzXgsF7aNGTPjSl5l9t6SROnRLLw1Xe+NkgW/vrO2AbJwrrvnFGTv8K5/IfAc99Zo8bxBCkHmzO+s6Yie61E8mXfGbNUkPdkeYWTt4u8laxLuxiu5H8BrlFovQrrMgAAAABJRU5ErkJggg=="
                id="b"
                width={90}
                height={90}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
)
export default Inscription
