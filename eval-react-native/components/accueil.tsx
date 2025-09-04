import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function AccueilScreen(){

    return (
        <SafeAreaView>
            <View style={styles.conteneur} >
                <Text style={styles.titrePage}>
                    Application de Transport Exceptionnel
                </Text>

                <Text style={styles.text}>
                    Application développer pour vous permettre de signaler tout obstacle que vous rencontrerez sur votre parcours.
                </Text>

                <Text style={styles.text}>
                   Vous pourrez voir la liste des obstacles signalés, en ajouter, et les supprimer. 
                </Text>

                <Text style={styles.text}>
                  Vous avez également une liste de contact qui vous sera utiles en cas de besoin. 

                  Vous y toruverez tout les contacts nécéssaire et lier à vos trajets. Hésitez pas à la consulter si besoin.
                </Text>
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