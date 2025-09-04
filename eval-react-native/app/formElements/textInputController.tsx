import { Controller } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";


export default function TextInputController({
    label, 
    control, 
    errors, 
    name, 
    defaultValue="", 
    placeholder
} : any){

    
    return(
        <>
            <View style={styles.conteneur}>
                <Text>{label}</Text>
                <Controller
                    control={control}
                    name={name}
                    defaultValue={defaultValue}
                    render={({ field : {onChange, onBlur, value} }) => (
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            style={styles.textInput}
                        />
                        
                    )}
                >

                </Controller>
            </View>
            <Text>
                {errors[name]?.message}

            </Text>
        </>
    )
}

const styles = StyleSheet.create({

    conteneur : {
    },
    textInput : {
        borderColor: "#a6a6a6",
        backgroundColor: "#f0f0f0",
        borderWidth: 3,
        borderRadius: 5,
        margin: 5,
        padding: 10
    }
})
