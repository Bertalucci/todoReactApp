import React from "react";

//label - свойство объекта (по сути филд)

const TodoListItem = ({label, important = false}) => {
    const style = {
      color: important ? 'tomato' : 'black'
    };

  return <span style={style}>{label}</span>
};

export default TodoListItem;