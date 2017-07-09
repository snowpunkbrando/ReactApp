// console.log('working');

const App = React.createClass({
  getInitialState: function() {
    return { who: 'world' };
  },

  render: function() {
    return React.createElement('div', null,
      React.createElement('h1', null, `Hello ${this.state.who}`),
      React.createElement('input', { type: 'text' }),
      React.createElement('button', null, `Submit`)
    );
  }
});

ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
);
