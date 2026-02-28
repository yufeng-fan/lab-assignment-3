import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ToDoListProps = {
  tasks: string[];
};

const ToDoList = ({ tasks }: ToDoListProps) => {
  return (
    <View>
      <Text style={styles.todoTitle}>ToDoList</Text>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskItemIncomplete}>
          <Text style={styles.taskTextIncomplete}>{task}</Text>
        </View>
      ))}
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  todoTitle: {
    fontSize: 28,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  taskItemIncomplete: {
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  taskTextIncomplete: {
    fontSize: 16,
    color: "#1f2937",
  },
});
