import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {detail: false}

        this.toggleDetail = this.toggleDetail.bind(this)
        this.toggleTodo = this.toggleTodo.bind(this)
    }

    toggleDetail(e) {
        e.preventDefault();
        this.setState({detail: !this.state.detail})
    }

    toggleTodo(e) {
        e.preventDefault();
        const toggleTodo = Object.assign({}, this.props.todo, {done: !this.props.todo.done})
        this.props.receiveTodo(toggleTodo)
    }

    render() {
        const {todo} = this.props
        const {title, done} = todo
        let detail;
        if (this.state.detail) {
            detail = <TodoDetailViewContainer todo={todo}/>
        }
        return (
            <li>
                <h3><a onClick={this.toggleDetail}>{ title}</a></h3>
                <button onClick={this.toggleTodo}> { done ? "Undo" : "Done"}
                </button>
                {detail}
            </li>
        )
    }
}

export default TodoListItem;