import { Image, Text, StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import { router, useRouter } from "expo-router"
import { useFonts, Urbanist_400Regular, Urbanist_700Bold } from "@expo-google-fonts/urbanist"


export default function Home() {

    const [fontsLoaded] = useFonts({
        Urbanist_400Regular,
        Urbanist_700Bold
    })


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Localidade</Text>
            <TouchableOpacity style={styles.botao} onPress={() => router.push('/home')}>
                <Text style={styles.textoBtn}>Voltar</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },

    titulo: {
        fontSize: 40,
        textAlign: "left",
  
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
    
    }
})