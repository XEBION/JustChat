import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.screen.background,
  },
  messageBox: {
    backgroundColor: Colors.screen.box,
    marginRight: 50,
    borderRadius: 5,
    padding: 10,
  },
  name: {
    color: Colors.screen.title,
    fontWeight: "bold",
    marginBottom: 5,
  },
  message: {
    color: Colors.screen.text,
  },
  time: {
    alignSelf: "flex-end",
    color: Colors.screen.time,
  }
});

export default styles;
