import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ContactCard from "../cardContact";

export default function ContactScreen(){


    const contactUtile = [
        { id: 1, nom: "MARC", prenom: "Julien", poste: "Responsable transport", numero: "07 50 05 05 05" },
        { id: 2, nom: "GOLFO", prenom: "Juan", poste: "Responsable logistique", numero: "07 60 05 05 05" },
        { id: 3, nom: "PARCO", prenom: "Paul", poste: "Responsable d'équipe", numero: "07 70 05 05 05" },
        { id: 4, nom: "POLO", prenom: "Marc", poste: "Mécanicien", numero: "07 90 05 05 05" },
        { id: 5, nom: "ARNAUD", prenom: "Marie", poste: "Responsable client", numero: "07 20 05 05 05" }

    ]

    return ( 

        <SafeAreaView>
            <View style={styles.conteneur}>
                <Text style={styles.titrePage}>
                    Contacts utiles
                </Text>
                <Text style={styles.text}>
                    Bienvenue dans l espace contacts utiles.
                </Text>
                <Text style={styles.text}>
                    Retrouvez ici tout les contacts utiles à vos missions trajets en cas de besoin !
                </Text>
                <FlatList 
                    data={contactUtile}
                    renderItem={({item}) => 
                        <View key={item.id}>
                            <ContactCard contact={item} />
                        </View>
                    }
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