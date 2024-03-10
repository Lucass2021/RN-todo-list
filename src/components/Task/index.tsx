import { Image, Text, TouchableOpacity, View } from "react-native"
import Checkbox from 'expo-checkbox';
import { useState } from "react";
import { styles } from "./style";
import { EvilIcons } from '@expo/vector-icons';

type Props = {
    taskName: string,
    onRemove: () => void,
    onChecked: (isChecked: boolean) => void,
}

export const Task = ({taskName, onRemove, onChecked}: Props) => {    
    const [checked, setChecked] = useState(false); 

    const handleCheckTask = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        onChecked(newChecked); 
    }

    return (
        <View style={styles.container}>
            <Checkbox 
                value={checked} 
                onValueChange={handleCheckTask} 
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