import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        backgroundColor: '#262626',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
    },
    taskCheckbox: {
        borderRadius: 50,
    },
    taskText: {
        color: "#F2F2F2",
        marginHorizontal: 10,
        maxWidth: 270
    },
})