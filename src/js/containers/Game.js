import React from 'react';
import { connect } from "react-redux";
import RowCardContainer from './../components/game/rowCardContainer';
import Timer from './../components/game/timer';
import Button from './../components/home/Button';
import { shirtsInit } from './../actions/index';

class Game extends React.Component {

  componentDidMount(){
    this.props.shirtsInit(this.props.width * this.props.height / 2);
  }

  render() {
    const List = [];
    for(let i = 0; i < this.props.height; i++){
        List.push(<RowCardContainer width={this.props.width} key={i} index={i}/>);
    }
    return <div className="game">
      <Timer />
      <div className="game-cards-container">
      {List}
      </div>
      <div className="game-buttons-container">
        <Button className="game-button" name="Home" location="/"/>
        <Button className="game-button" name="Back" location="/settings"/>
      </div>
    </div>
  }
}
const mapStateToProps = state => {
  return {
    width: state.settings.width,
    height: state.settings.height,
    back: state.settings.back,
    shirts: state.game.shirts
  };
};

const mapDispatchToProps = dispatch => {
  return{
    shirtsInit: (width) => {
      dispatch(shirtsInit(width))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
