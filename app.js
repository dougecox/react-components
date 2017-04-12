class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['p', 'p']}/> // Here we are creating an instance of the `TodoList` component
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));