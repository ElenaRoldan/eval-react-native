import { Contact } from "@/model/Contact.d";
import { StyleSheet, Text, View } from "react-native";

type ContactCardProps = { contact: Contact  }

export default function ContactCard({ contact }: ContactCardProps) {
    return (
        <View style={styles.conteneur}>
            <View style={styles.carte}>
                <Text>Nom : {contact.nom} </Text>
                <Text>Prénom : {contact.prenom}</Text>
                <Text>Poste : {contact.poste}</Text>
                <Text>Tél. : {contact.numero}</Text>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    conteneur: {
        padding: 10, 
        flexDirection: 'row',
        justifyContent: "center", 
    }, 
    carte: {
        padding: 15, 
        borderWidth: 1,
        borderRadius: 15,
        width: 290, 
        borderColor: "grey"
    }
})