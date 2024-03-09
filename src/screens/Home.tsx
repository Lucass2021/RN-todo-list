import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export const Home = () => {
    return(
        <View style={styles.container}>
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
    )
}