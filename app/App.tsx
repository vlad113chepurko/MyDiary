import { View, Text, StyleSheet } from 'react-native';
import  Home  from '../pages/Home';
import Header from '../layouts/Header/Header';

export default function App () {
    return (
        <View style={styles.container}>
            <Header />
            <Home />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})
