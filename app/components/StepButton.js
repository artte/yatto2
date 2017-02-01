import React from 'react';
import { connect } from 'react-redux';
import { getStepsAction } from '../actions/actions';
import { callWorker } from '../handler';

class StepButton extends React.Component {
  render() {
    return (
      <div className="step-button">
        <button onClick={this.props.getSteps} disabled={this.props.calculatingSteps}>Get Steps</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    calculatingSteps: state.get('calculatingSteps'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSteps: () => {
      callWorker();
      // dispatch(getStepsAction());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepButton);