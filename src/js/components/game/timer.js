import React from 'react';
import { connect } from "react-redux";
import { setNewTime, setTime } from './../../actions/index';

class Timer extends React.Component {

    componentDidMount() {
        this.props.setTime();
        this.timer = setInterval(() => this.props.setNewTime(this.props.currentTime), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return <div className="game-timer">
            {this.props.currentTime} seconds left
        </div>
    }
}

const mapStateToProps = state => {
    return {
      currentTime: state.game.currentTime
    };
};

const mapDispatchToProps = dispatch => {
    return{
      setNewTime: (currentTime) =>{
        dispatch(setNewTime(currentTime))
      },
      setTime: () => {
        dispatch(setTime())
      }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Timer);