import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import TextInputController from "../formElements/textInputController";
import { Controller, useForm } from "react-hook-form";
import SelecteurInput from "../formElements/selecteurPicker";
import SelecteurDanger from "../formElements/selecteurPicker";
import Bouton from "../formElements/bouton";


export default function AjouterObstacleScreen(){

    const {
        control, 
        handleSubmit, 
        formState : {errors},
        getValues
    } = useForm()

    const enregistrer = () => console.log(getValues());

    return (
        <SafeAreaView>
            <View style={styles.conteneur}>
            <Text style={styles.titrePage}>
                Formulaire ajout obstacle 
            </Text>

                <TextInputController
                    label="Titre obstacle"
                    control={control}
                    name="titre"
                    errors={errors}
                    placeholder="Ex: Branche sur la route"
                />
                <TextInputController 
                    label="Description"
                    control={control}
                    name="description"
                    errors={errors}
                    placeholder="Ex: Branche milieu voie de droite "
                />
                <TextInputController
                    label="Signaler par"
                    control={control}
                    name="signaler"
                    errors={errors}
                    placeholder="Ex: Louis CHARLES "
                />
                <TextInputController
                    label="Date"
                    control={control}
                    name="date"
                    errors={errors}
                    placeholder="Ex: 20/08/2025 "
                />
                <Controller
                    control={control}
                    name="niveauDanger"
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <SelecteurDanger value={value} onChange={onChange} />
                    )}
                />                
                <Bouton 
                    action={enregistrer}
                    label="Enregistrer" 
                    color="#4a65ed" 
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
    }
})