import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Todo} from '../types';

interface TodoItemProps {
  todoItem: Todo;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({todoItem, onDelete}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.todoText}>
        <Text style={[styles.text, todoItem.completed && styles.completedText]}>
          {todoItem.text}
        </Text>
      </TouchableOpacity>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#ca8a04'}]}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onDelete}
          style={[styles.btn, {backgroundColor: '#e11d48'}]}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  todoText: {
    flex: 1,
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 5,
  },

  btn: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default TodoItem;
