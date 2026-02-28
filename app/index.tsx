import { useState } from "react";
import { View } from "react-native";
import ToDoList from "../components/ToDoList";

export default function Index() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ToDoList tasks={tasks} />
    </View>
  );
}
