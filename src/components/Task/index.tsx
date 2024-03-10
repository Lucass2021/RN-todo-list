import { Image, Text, TouchableOpacity, View } from "react-native"
import Checkbox from 'expo-checkbox';
import { useState } from "react";
import { styles } from "./style";
import { EvilIcons } from '@expo/vector-icons';

type Props = {
    taskName: string,
    onRemove: () => void
}

export const Task = ({taskName, onRemove}: Props) => {
    const [checked, setChecked] = useState(true)

    return(
        <View style={styles.container}>
            <Checkbox 
                value={checked} 
                onValueChange={setChecked} 
                style={styles.taskCheckbox}
            />

            <Text style={styles.taskText}>
                {taskName}
            </Text>

            <TouchableOpacity activeOpacity={0.5} onPress={onRemove}>
                <EvilIcons name="trash" size={30} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}