import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counterReducer };
}
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Counter);
