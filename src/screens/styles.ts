import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D0D0D",
        padding: 24,
    },
    header: {
        width: "100%",
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
    },
    todoStatus: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32,
        paddingBottom: 20,
        borderBottomColor: "#333333",
        borderBottomWidth: 1,
    },  
    todoTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    todoTextCreated: {
        color: "#4EA8DE",
    },
    todoTextfinished: {
        color: "#8284FA",
    },
    todoStatusValue: {
        backgroundColor: "#1a1a1a",
        color: "#fff",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginLeft: 10,
    }
})