import { View, StyleSheet, Image } from 'react-native';

export default function Header() {
    return (
        <View>
            <Image></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    }
})