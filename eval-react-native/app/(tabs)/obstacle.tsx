import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Bouton from "../../components/formElements/bouton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import CardObstacle from "../cardObstacle";

export default function ObstacleScreen(){

    const router = useRouter()
    const [obstacle, setObstacle] = useState([])

    const ajouter = () => {
        router.push("/ajouterObstacle");
    }

    const getData = async () => {
        try {
            const data = await AsyncStorage.getItem('ajout-obstacles')
            console.log(data );
            
            setObstacle(data ? JSON.parse(data) : [])
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    useFocusEffect( 
        useCallback(() => {
            getData()
        }, [])
    )

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.conteneur}>
                <Text style={styles.titrePage}>
                    Obstacles
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
                <FlatList
                    data={obstacle}
                    renderItem={({item}) => 
                        <View key={item.titre}>
                            <CardObstacle obstacle={item} />
                        </View>
                    }
               />
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