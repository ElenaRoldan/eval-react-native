import {Picker} from '@react-native-picker/picker';
import { Text, View } from 'react-native';

export default function SelecteurDanger({
    value, 
    onChange
} : any){


    return (

        <View>
            <Text>
                Choisir le niveau de danger (faire défilé)
            </Text>
           <Picker
                selectedValue={value}
                onValueChange={onChange}
                style={{marginTop: -30}}
                itemStyle={{ 
                    height: 180,
                    color: 'blue'
                }}
            >
    <Picker.Item label="Faible" value="faible" />
    <Picker.Item label="Moyen" value="moyen" />
    <Picker.Item label="Élevé" value="eleve" />
</Picker>

        </View>
    )



}