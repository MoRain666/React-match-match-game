import React, { Component } from 'react';
import Button from './../components/home/Button';
class Home extends Component{

    render(){
        return <div className='start-page'>
            <Button className="home-buttons" name="New Game" location="/registration"/>
            <Button className="home-buttons" name="Score" location="/score"/>
        </div>
    }
}
export default Home;