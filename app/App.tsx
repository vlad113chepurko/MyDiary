import { View, StyleSheet } from 'react-native';
import  Home  from '@/pages/Home';
import Header from '@/layouts/Header/Header';
import Footer from '@/layouts/Footer/Footer';

export default function App () {
    return (
        <View style={styles.container}>
            <Header />
            <Home />
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        paddingLeft: 16,
        paddingRight: 16
    }
})
