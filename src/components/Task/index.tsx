import { Text, TouchableOpacity, View } from "react-native"
import Checkbox from 'expo-checkbox';
import { styles } from "./style";
import { EvilIcons } from '@expo/vector-icons';
import { TaskType } from "../../types/Task";


type TaskProps = {
    task: TaskType,
    onRemove: () => void,
    onChecked: (checked: boolean) => void,
}

export const Task = ({task, onRemove, onChecked}: TaskProps) => {    
    return (
        <View style={styles.container}>
            <Checkbox 
                value={task.checked} 
                onValueChange={(checked) => onChecked(checked)} 
                style={styles.taskCheckbox}
            />

            <Text style={!task.checked ? styles.taskText : [styles.taskText, styles.taskTextFinished ]}>
                {task.name}
            </Text>

            <TouchableOpacity activeOpacity={0.5} onPress={onRemove}>
                <EvilIcons name="trash" size={30} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}