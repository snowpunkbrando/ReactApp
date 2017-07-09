

const App = React.createClass({
  getInitialState: function() {
      return ( {who: 'world'} );
  },

  render: function() {
    React.createElement('div', null,
    React.createElement('h1', null, 'Hello ${this.state.who}'),
    React.createElement('input', {type: 'text'})
    );
  }
});

ReactDOM.render(
    createElement(App),
    document.getElementById('app')
);
