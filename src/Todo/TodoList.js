import React from "react";
import TodoItem from "./TodoItem"
import PropType from "prop-types"
const styles = {
    ui: {
        listStyle: "none",
        padding: 0,
        margin: 0
    }
}
 function TodoList (props) {
    return (
        <ui style={styles.ui}>
            {
                props.todos.map((todo, index) => {
                    return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>
                })
            }
        </ui>
    )
}

TodoList.propTypes = {
    todos: PropType.arrayOf(PropType.object).isRequired,
    onToggle: PropType.func.isRequired
}
export default TodoList