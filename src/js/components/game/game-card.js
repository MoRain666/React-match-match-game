import React from 'react';
import { connect } from "react-redux";

class CardOfGame extends React.Component{

    render(){
        const numberOfCard = this.props.width * this.props.indexA + this.props.indexB;
        const imageUrl = require(`../../../img/backs/${this.props.back}`);
        return <div style={{backgroundImage: `url(${imageUrl})`}} className="game-card">{numberOfCard}</div>
    }

}

const mapStateToProps = state => {
    return {
        width: state.settings.width,
        back: state.settings.back
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return{
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CardOfGame);