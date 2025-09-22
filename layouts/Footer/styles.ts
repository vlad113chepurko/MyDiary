import { variables } from "@/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    footer: {
        zIndex: 100,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 16,
        right: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    centerButton: {
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: variables.pink,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
    },
    sideButtons: {
        width: 50,
        height: 50,
        backgroundColor: variables.pinkOpacity,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
    }
});
