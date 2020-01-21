import React from 'React';

class Message extends React.Component<
  {
    message: string;
  },
  {
    count: number;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  public increment = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  };
  public render() {
    return (
        <div onClick = {this.increment}>
        {this.props.message}
        {this.state.count}
      </div>
    );
  }
}

const App = () => <Message message="点击"/>;

export default App;