import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({onAddTodo}) => {
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim()) {
      onAddTodo(todoText.trim());
      setTodoText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={todoText}
        onChangeText={setTodoText}
        style={styles.inputBox}
        placeholder="Add Todo..."
      />
      <TouchableOpacity onPress={handleAddTodo} style={styles.addBtn}>
        <Text style={styles.addBtnText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  inputBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#4338ca',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },

  addBtn: {
    backgroundColor: '#4338ca',
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TodoInput;
