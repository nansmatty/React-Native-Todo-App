import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Todo} from '../types';
import TodoEdit from './TodoEdit';

interface TodoItemProps {
  todoItem: Todo;
  onDelete: () => void;
  onToggle: () => void;
  onEdit: (newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todoItem,
  onDelete,
  onToggle,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (newText: string) => {
    onEdit(newText);
  };

  if (isEditing) {
    return (
      <TodoEdit
        todo={todoItem}
        onSave={handleEdit}
        onCancel={() => setIsEditing(prev => !prev)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle} style={styles.todoText}>
        <Text style={[styles.text, todoItem.completed && styles.completedText]}>
          {todoItem.text}
        </Text>
      </TouchableOpacity>
      <View style={styles.btnContainer}>
        {!todoItem.completed && (
          <TouchableOpacity
            onPress={() => setIsEditing(prev => !prev)}
            style={[styles.btn, {backgroundColor: '#ca8a04'}]}>
            <Text style={styles.btnText}>Edit</Text>
          </TouchableOpacity>
        )}
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
