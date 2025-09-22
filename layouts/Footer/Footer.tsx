import {View, Pressable} from "react-native";
import { assets } from '@/assets/svg/index';
import { styles } from './styles';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Pressable style={styles.sideButtons}>
                <assets.Inscription />
            </Pressable>
            <Pressable style={styles.centerButton}>
                <assets.Plus />
            </Pressable>
            <Pressable style={styles.sideButtons}>
                <assets.User />
            </Pressable>
        </View>
    )
}