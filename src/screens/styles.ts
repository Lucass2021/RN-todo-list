import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D0D0D",
        padding: 24,
        alignItems: "center",
    },
    inputBox: {
        flexDirection: "row",
        marginTop:40,
    },
    inputText: {
        flex: 1,
        backgroundColor: "#1a1a1a",
        height: 56,
        borderRadius: 5,
        padding: 10,
        color: "#F2F2F2",
        marginRight: 5
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#1E6F9F",
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: "#fff",
        fontSize: 24,
    }
})