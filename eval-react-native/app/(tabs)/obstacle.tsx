import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AjouterObstacleScreen from "../obstacles/ajouterObstacle";
import Bouton from "../formElements/bouton";
import { useRouter } from "expo-router";

export default function ObstacleScreen(){

    const router = useRouter()

    const ajouter = () => {
        router.push("/obstacles/ajouterObstacle");
    }

    return (
        <SafeAreaView>
            <View style={styles.conteneur}>
                <Text style={styles.titrePage}>
                    Application Des Transports
                </Text>
                <Text style={styles.text} >
                    Bienvenue dans l espace des obstacles. 
                </Text>
                <Text style={styles.text}>
                    Ici il sera possible de voir et gérer les obstacles que vous rencontrez sur la route
                </Text>
                <Bouton
                    label="Ajouter un obstacle"
                    color="#182ded"
                    action={ajouter}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conteneur: {
        padding: 10
    },
    titrePage: {
        fontSize: 18,
        textAlign: "center", 
        margin: 15
    }, 
    text: {
        fontSize:16, 
        margin: 4

    }
})