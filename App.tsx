import {View, Text, StyleSheet} from 'react-native';
import TodoInput from './src/components/TodoInput';
import {useState} from 'react';
import {Todo} from './src/types';
import TodoList from './src/components/TodoList';

const App = (): React.JSX.Element => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodoList([
      ...todoList,
      {
        id: Date.now().toString(),
        text,
        completed: false,
      },
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodoList(todoList.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Todo App</Text>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todoList={todoList} onDeleteTodo={deleteTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;
