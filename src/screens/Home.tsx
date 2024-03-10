import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Task } from "../components/Task"
import { useState } from "react"
import { AntDesign, Octicons } from '@expo/vector-icons';

export const Home = () => {
    const [tasks, setTasks] = useState<string[]>([])
    const [newTask, setNewTask] = useState("")
    const [checkedTasksCount, setCheckedTasksCount] = useState(0);

    const handleAddTask = (newTask: string) => {
        if(tasks.includes(newTask)){
            return Alert.alert("Task already exists!", "Create a task with a different name")
        }

        if(newTask === ""){
            return Alert.alert("Invalid task name", "Create a task with a valid name")
        }

        setTasks([...tasks, newTask])
        setNewTask("")
    }

    const handleRemoveTask = (item: string, index: number) => {
        Alert.alert("Remove task", `Do you want to remove the task ${item}?`, [
            {
                text: 'Yes',
                onPress: () => setTasks(tasks.filter(task => task !== item))
            },
            {
                text: 'No',
            },
        ])
    }

    const handleCheckTask = (isChecked: boolean) => {
        isChecked ? setCheckedTasksCount(checkedTasksCount + 1) : setCheckedTasksCount(checkedTasksCount - 1);
    }

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={require('../assets/Logo.png')} />

                <View style={styles.inputBox} >
                    <TextInput 
                        placeholder="Add new task" 
                        style={styles.inputText}
                        placeholderTextColor={"#808080"}  
                        value={newTask}
                        onChangeText={(text) => setNewTask(text)}

                    />
                    <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => handleAddTask(newTask)}>
                        <AntDesign 
                            name="pluscircleo" 
                            size={24} 
                            color="#fff" 
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.todoStatus}>
                <View style={styles.todoTextContainer}>
                    <Text style={styles.todoTextCreated}>Created</Text>
                    <Text style={styles.todoStatusValue}>{tasks.length}</Text>
                </View>
                <View style={styles.todoTextContainer}>
                    <Text style={styles.todoTextfinished}>Finished</Text>
                    <Text style={styles.todoStatusValue}>{checkedTasksCount}</Text>
                </View>
            </View>

            <View style={styles.tasksBox}>
                <FlatList
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({item, index}) => (
                        <Task 
                            key={index}
                            taskName={item}
                            onRemove={() => handleRemoveTask(item, index)}
                            onChecked={handleCheckTask}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.emptyContainer}>
                            <Octicons 
                                name="checklist" 
                                size={24} 
                                color="#808080" 
                                style={styles.emptyIcon}
                            />

                            <Text style={[styles.emptyText, { fontWeight: "bold" }]}>
                                You don't have any tasks registered
                            </Text>
                            <Text style={styles.emptyText}>
                                Create tasks and organize your to-do items
                            </Text>
                        </View>
                    )}
                />
                    
                
            </View>


        </View>
    )
}