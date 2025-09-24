import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="/" options={{ title: "Home" }} />
            <Tabs.Screen name="newNote" options={{ title: "NewNote" }} />
        </Tabs>
    );
}
