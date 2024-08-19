import { TouchableOpacity, Image, StyleSheet, Text, View, Platform } from 'react-native';
import { useRouter } from "expo-router"
import { useFonts, Urbanist_400Regular, Urbanist_700Bold } from "@expo-google-fonts/urbanist"
0
export default function Localidade() {
    const [fontsLoaded] = useFonts({
        Urbanist_400Regular,
        Urbanist_700Bold
    })

    const router = useRouter()

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Página principal</Text>
            <TouchableOpacity style={styles.botao} onPress={() => router.push('/localidade')}>
                <Text style={styles.textoBtn}>Entrar</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",

    },

    titulo: {
        fontSize: 40,
        textAlign: "left",
        fontFamily: "Urbanist_400Regular"
    },

    botao: {
        backgroundColor: "#4169E1",
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10
    },

    textoBtn: {
        color: "#F0F8FF",
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Urbanist_400Regular"
    }
})