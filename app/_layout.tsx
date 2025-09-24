import { Stack } from 'expo-router';
import Header from '@/layouts/Header/Header';
import Footer from '@/layouts/Footer/Footer';

export default function RootLayout() {
    return (
        <>
            <Header />
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
            <Footer />
        </>
    );
}
