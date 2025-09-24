import {View, Text, StyleSheet} from 'react-native';
import {Link} from 'expo-router';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to My Diary!</Text>
            <Link href={'/tabs/newNote'}>
                Go to newNote
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});