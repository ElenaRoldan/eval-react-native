import { Pressable, StyleSheet, Text } from "react-native";


export default function Bouton({
    label, 
    color, 
    textColor, 
    fontSize, 
    action
} : any){

    return(
        <Pressable onPress={action} style={[{ backgroundColor: color }, styles.bouton]}>
            <Text style={{color: textColor ? textColor : "white", fontSize: fontSize ? fontSize : 15}}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    bouton: {
        borderWidth: 1,
        padding: 10, 
        margin: 15,
        height: 50,
        borderRadius: 8,
        justifyContent: "center", 
        alignItems: "center", 
    }
})