import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Todo} from '../types';

interface TodoEditProps {
  todo: Todo;
  onSave: (newText: string) => void;
  onCancel: () => void;
}

const TodoEdit: React.FC<TodoEditProps> = ({todo, onSave, onCancel}) => {
  const [todoText, setTodoText] = useState(todo?.text);

  const handleSave = () => {
    if (todoText.trim()) {
      onSave(todoText.trim());
      onCancel();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        value={todoText}
        onChangeText={setTodoText}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={handleSave}
          style={[styles.btn, {backgroundColor: '#16a34a'}]}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onCancel}
          style={[styles.btn, {backgroundColor: '#d97706'}]}>
          <Text style={styles.btnText}>Cancel</Text>
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

  inputBox: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginRight: 10,
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

export default TodoEdit;
