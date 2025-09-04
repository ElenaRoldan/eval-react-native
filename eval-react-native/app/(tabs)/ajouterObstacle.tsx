import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import TextInputController from "../../components/formElements/textInputController";
import { Controller, useForm } from "react-hook-form";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelecteurDanger from "../../components/formElements/selecteurPicker";
import Bouton from "../../components/formElements/bouton";

export default function AjouterObstacleScreen(){


    const {
        control, 
        getValues,
        handleSubmit, 
        formState : {errors}
    } = useForm();

        const storeData = async (value) => {
            try {
                const existing = await AsyncStorage.getItem('ajout-obstacles');
                const obstacles = existing ? JSON.parse(existing) : [];
                
                obstacles.push(value);
                
                await AsyncStorage.setItem('ajout-obstacles', JSON.stringify(obstacles));
            } catch (e) {
                console.log(e);
            }
        };

        const enregistrer = async (data) => {
            console.log("Données du formulaire:", data)
            await storeData(data)
            alert("Obstacle enregistré avec succès !! Merci ")
        }

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
                <TextInputController
                    label="Lieu"
                    control={control}
                    name="lieu"
                    errors={errors}
                    placeholder="Ex: Metz "
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
                    action={handleSubmit(enregistrer)}
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