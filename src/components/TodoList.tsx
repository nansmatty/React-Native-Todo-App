import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Todo} from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todoList: Todo[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({todoList, onDeleteTodo}) => {
  return (
    <ScrollView style={styles.container}>
      {todoList.map(todo => (
        <TodoItem
          key={todo.id}
          todoItem={todo}
          onDelete={() => onDeleteTodo(todo.id)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TodoList;
