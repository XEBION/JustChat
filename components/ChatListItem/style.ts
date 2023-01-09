import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: Colors.screen.border,
        padding: 10,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        justifyContent: 'space-around'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15,
    },
    username: {
        color: Colors.screen.title,
        fontWeight: 'bold',
        fontSize: 16,
    },
    lastMessage: {
        fontSize: 16,
        color: Colors.screen.text,
    },
    time: {
        fontSize: 14,
        marginRight: 114,
        color: Colors.screen.time,
    },
});

export default styles;