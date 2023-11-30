import React from 'react';

export default function FavoriteColor(){

    const [color,setColor] = React.useState('black');

    function onClickRed(){
        setColor('Red');
    }

    function onClickBlue(){
        setColor('Blue');
    }

    function onClickPurple(){
        setColor('Purple');
    }

    return(
        <div>
            <div>
                <h1 
                style={{
                    color : color,
                }}> 
                My Favorite Color is {color}
                </h1>
            </div>
            <div className="ui buttons">
                <button className='ui red button' onClick={onClickRed}>Red</button>
                <div class="or"></div>
                <button className='ui blue button' onClick={onClickBlue}>Blue</button>
                <div class="or"></div>
                <button className='ui purple button' onClick={onClickPurple}>Purple</button>
            </div>
        </div>
    );
}