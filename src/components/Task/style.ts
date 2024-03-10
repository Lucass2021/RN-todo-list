import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        backgroundColor: '#262626',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    taskCheckbox: {
        borderRadius: 50,
    },
    taskText: {
        color: "#F2F2F2",
        marginHorizontal: 10,
        maxWidth: 270,
    },
    taskTextFinished: {
        color: "#808080",
        textDecorationLine: "line-through"
    }
})