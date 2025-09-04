
import { Obstacle } from "@/model/Obstacle.d";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

type ObstacleCardProps = { obstacle: Obstacle }

export default function CardObstacle({obstacle} : ObstacleCardProps){

    return (
        <View style={styles.conteneur}>
            <View style={styles.carte}>
                <View style={{ alignItems:"center", margin: 10 }}>
                    <FontAwesome6  name="triangle-exclamation" size={30} />
                </View>
                <Text style={styles.text}>Titre : {obstacle.titre}</Text>
                <Text style={styles.text} >Description : {obstacle.description}</Text>
                <Text style={styles.text}>Date : {obstacle.date}</Text>
                <Text style={styles.text}>SIgnaler par : {obstacle.signaler}</Text>
                <Text style={styles.text}>Niveau Danger : {obstacle.niveauDanger}</Text>
                <Text style={styles.text}>Lieu : {obstacle.lieu ? obstacle.lieu : 'Pas de lieu definit'}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conteneur: {
        flex: 1,
        padding: 5, 
        flexDirection: 'row',
        justifyContent: "center", 
    }, 
    carte: {
        flex: 1,
        padding: 15, 
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "grey"
    },
    text: {
        fontSize:16, 
        margin: 3

    }
})