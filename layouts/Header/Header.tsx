import { View, StyleSheet } from 'react-native';
import { assets } from '@/assets/svg/index';
export default function Header() {
    return (
        <View style={styles.header}>
            <assets.Menu />
            <View style={{ flexDirection: "row", gap: 16 }}>
                <assets.Search />
                <assets.SortingArrows />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        paddingLeft: 16,
        paddingRight: 16,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    }
})