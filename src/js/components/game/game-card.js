import React from 'react';
import { connect } from "react-redux";
import LoadingScreen from './../LoadingScreen/index';
import { pushToCheck, changeTheIsClicked, clearCheckArray, changeTheVisibility, pairsFound} from '../../actions/index';

class CardOfGame extends React.Component{

    cliked = () => {
        if(this.props.arrayInCheck.length === 2) return;
        const numberOfCard = this.props.width * this.props.indexA + this.props.indexB ;
        const numberOfCardInArray = numberOfCard - 1;
        if(this.props.arrayInCheck.length === 1 && this.props.arrayInCheck[0].numberInArray === numberOfCardInArray) return;
        const nameOfCard = this.props.arrayOfShirts[numberOfCardInArray];
        this.props.pushToCheck(numberOfCardInArray, nameOfCard);
        this.props.changeTheIsClicked(numberOfCardInArray);
        if(this.props.arrayInCheck.length === 2){
            if(this.props.arrayInCheck[0].cardName !== this.props.arrayInCheck[1].cardName){
                setTimeout(()=>{
                    this.props.changeTheIsClicked(this.props.arrayInCheck[0].numberInArray);
                    this.props.changeTheIsClicked(this.props.arrayInCheck[1].numberInArray);
                    this.props.clearCheckArray();
                },1500)
            }else{
                setTimeout(()=>{
                    this.props.changeTheVisibility(this.props.arrayInCheck[0].numberInArray);
                    this.props.changeTheVisibility(this.props.arrayInCheck[1].numberInArray);
                    this.props.clearCheckArray();
                    this.props.pairsFound();
                },1500)
            }
        }
        console.log(this.props.countPairsFound)
    }

    backGroundOfCard = () => {
        const numberOfCard = this.props.width * this.props.indexA + this.props.indexB ;
        const numberOfCardInArray = numberOfCard - 1;
        const backImageUrl = require(`../../../img/backs/${this.props.back}`);
        const shirtImageUrl = require(`../../../img/shirts/${this.props.arrayOfShirts[numberOfCardInArray]}`);
        let back = {backgroundImage:`url(${backImageUrl})`};
        if(this.props.objectOfShirts[numberOfCardInArray].isClicked){
            back = {backgroundImage:`url(${shirtImageUrl})`};
        }
        return back;
    }


    classNameOfCard = () => {
        const numberOfCard = this.props.width * this.props.indexA + this.props.indexB ;
        const numberOfCardInArray = numberOfCard - 1;
        if(this.props.objectOfShirts[numberOfCardInArray].isVisible){
            return "game-card";
        }else{
            return "game-card hidden"
        }
    }

    render(){
        const backGround = this.backGroundOfCard();
        const className = this.classNameOfCard()
        if(this.props.arrayOfShirts.length === 0/*this.props.height * this.props.width*/ || typeof this.props.arrayOfShirts === 'undefined'){
            return <LoadingScreen />
        }
        return <div onClick={this.cliked} style={backGround} className={className}></div>
    }

}

const mapStateToProps = state => {
    return {
        width: state.settings.width,
        back: state.settings.back,
        arrayOfShirts: state.game.arrayOfShirts,
        height: state.settings.height,
        objectOfShirts: state.game.shirts,
        arrayInCheck: state.game.forCheck,
        countPairsFound: state.game.pairsCount,
        store: state
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return{
        pairsFound: () => {
            dispatch(pairsFound())
        },
        pushToCheck: (number,name) => {
            dispatch(pushToCheck(number, name))
        },
        changeTheIsClicked: number => {
            dispatch(changeTheIsClicked(number))
        },
        clearCheckArray: () => {
            dispatch(clearCheckArray())
        },
        changeTheVisibility: number => {
            dispatch(changeTheVisibility(number))
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CardOfGame);