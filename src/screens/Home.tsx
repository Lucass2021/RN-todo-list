import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export const Home = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/Logo.png')} />

                <View style={styles.inputBox} >
                    <TextInput 
                        placeholder="Adicione uma nova tarefa" 
                        style={styles.inputText}
                        placeholderTextColor={"#808080"}  
                    />
                    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                        <Text style={styles.buttonText}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.todoStatus}>
                <View style={styles.todoTextContainer}>
                    <Text style={styles.todoTextCreated}>Criadas</Text>
                    <Text style={styles.todoStatusValue}>0</Text>
                </View>
                <View style={styles.todoTextContainer}>
                    <Text style={styles.todoTextfinished}>Concluídas</Text>
                    <Text style={styles.todoStatusValue}>0</Text>
                </View>
            </View>


        </View>
    )
}