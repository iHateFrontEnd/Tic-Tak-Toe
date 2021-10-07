 import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App(){
    return(
        <div onMouseOut={mouseOutStartupDiv} onMouseOver={startupDivHover} className='startup' id='startup'>
            <h1>click to start</h1> 

            <button className='start' onClick={enterPlayerNamesFunc}>start</button>
        </div>
    );
}

//onmouseout for startup div
function mouseOutStartupDiv(){
    let startupDiv = document.getElementById('startup');
    startupDiv.style.transition = '1s ease-out';
    startupDiv.style.opacity = '0';
}

//mouseover for startup div
function startupDivHover(){
    let startupDiv = document.getElementById('startup');
    startupDiv.style.transition = '1s ease-in';
    startupDiv.style.opacity = '1';
    startupDiv.style.paddingTop = '50px';
    startupDiv.style.marginTop = '100px';
    startupDiv.style.marginRight = '200px';
    startupDiv.style.marginLeft = '200px';
    startupDiv.style.paddingBottom = '50px';
    startupDiv.style.backgroundColor = 'white';
    startupDiv.style.borderRadius = '50px';
    startupDiv.style.borderStyle = 'none';
    startupDiv.style.textAlign = 'center';
}

function enterPlayerNamesFunc(){
    class EnterPlayerNames extends React.Component{
        render(){ 
            return(
                <div className='playerNameDiv' onMouseOver={playerNameDivHover} onMouseOut={mouseOutPlayerNameDiv} id='playerNameDiv'>
                    <h1>Enter name for player 1</h1>

                    <input type="text" id="player1Name" className="enterPlayerNames" />

                    <h1>Enter name for player 2</h1>

                    <input type="text" id="player2Name" className="enterPlayerNames" />

                    <br/>
                    <br/>

                    <button className='skipBtn' onClick={setPlayerNameToSessionStorage}>Next</button>

                    <br/>
                    <br/>

                    <button className='skipBtn' onClick={setPlayerNamesAsDefault}>skip</button>
                </div>
            );
        }
    }

    ReactDOM.render(
        <EnterPlayerNames />, document.getElementById('root')
    );
}
//hover for playerNameDiv
function playerNameDivHover(){
    let playerNameDiv = document.getElementById('playerNameDiv');
    playerNameDiv.style.transition = '1s ease-in';
    playerNameDiv.style.opacity = '1';
    playerNameDiv.style.paddingTop = '30px';
    playerNameDiv.style.marginTop = '20px';
    playerNameDiv.style.marginRight = '200px';
    playerNameDiv.style.marginLeft = '200px';
    playerNameDiv.style.paddingBottom = '20px';
    playerNameDiv.style.backgroundColor = 'orange';
    playerNameDiv.style.borderRadius = '50px';
    playerNameDiv.style.borderStyle = 'none';
    playerNameDiv.style.textAlign = 'center';
} 

//mouseOut for playerNameDiv
function mouseOutPlayerNameDiv(){
    let playerNameDiv = document.getElementById('playerNameDiv');
    playerNameDiv.style.opacity = '0';
    playerNameDiv.style.transition = '1s ease-out';
}

function setPlayerNameToSessionStorage(){
    sessionStorage.setItem('player1Name', document.getElementById('player1Name').value);
    sessionStorage.setItem('player2Name', document.getElementById('player2Name').value);

    document.getElementById('playerNameDiv').style.display = 'none';

    createGame();
}

function setPlayerNamesAsDefault(){
    sessionStorage.setItem('player1Name', 'Player 1');
    sessionStorage.setItem('player2Name', 'Player 2');

    document.getElementById('playerNameDiv').style.display = 'none';

    createGame();
}

function createGame(){
    class Game extends React.Component{
        render(){
            return(
                <div className='game' onMouseOut={mouseOutGameDiv} onMouseOver={gameDivHover} id='game'>
                    <h1>{sessionStorage.getItem('player1Name') + ' = X, ' + sessionStorage.getItem('player2Name') + ' = O'}</h1>

                    <table className='gameTable' id='gameTable'>
                        <tr>
                            <td><input type='text' onInput={checkWhoWon} className='gameCells' id='row1Col1' /></td>
                            <td><input type='text' onInput={checkWhoWon} className='gameCells' id='row1Col2' /></td>
                            <td><input type='text' onInput={checkWhoWon} className='gameCells' id='row1Col3' /></td>
                        </tr>

                        <tr>
                            <td><input type='text' onInput={checkWhoWon} className='gameCells' id='row2Col1' /></td>
                            <td><input type='text' onInput={checkWhoWon} className='gameCells' id='row2Col2' /></td>
                            <td><input type='text' onInput={checkWhoWon} className='gameCells' id='row2Col3' /></td>
                        </tr>

                        <tr>
                            <td><input type='text' onInput={checkWhoWon} className='gameCells' id='row3Col1' /></td>
                            <td><input type='text' onInput={checkWhoWon} className='gameCells' id='row3Col2' /></td>
                            <td><input type='text' onInput={checkWhoWon} className='gameCells' id='row3Col3' /></td>
                        </tr>
                    </table>

                    <button className='clearBoardButton' onClick={clearBoard}>Clear board</button> 
                </div>
            );
        }
    }

    ReactDOM.render(
        <Game />, document.getElementById('root')
    );
}


//mouse out for game div
function mouseOutGameDiv(){
    let gameDiv = document.getElementById('game');
    gameDiv.style.transition = '1s ease-out';
    gameDiv.style.opacity = '0';
}

//hover for gameDiv
function gameDivHover(){
    let gameDiv = document.getElementById('game');
    gameDiv.style.transition = '1s ease-in';
    gameDiv.style.opacity = '1';
    gameDiv.style.paddingTop = '30px';
    gameDiv.style.marginTop = '20px';
    gameDiv.style.marginRight = '200px';
    gameDiv.style.marginLeft = '200px';
    gameDiv.style.paddingBottom = '20px';
    gameDiv.style.backgroundColor = 'orange';
    gameDiv.style.borderRadius = '50px';
    gameDiv.style.borderStyle = 'none';
    gameDiv.style.textAlign = 'center';
}

//this function checks who won
function checkWhoWon(){
    //inputs for the game
    var row1Col1 = document.getElementById('row1Col1').value;
    var row1Col2 = document.getElementById('row1Col2').value;
    var row1Col3 = document.getElementById('row1Col3').value;
    var row2Col1 = document.getElementById('row2Col1').value;
    var row2Col2 = document.getElementById('row2Col2').value;
    var row2Col3 = document.getElementById('row2Col3').value;
    var row3Col1 = document.getElementById('row3Col1').value;
    var row3Col2 = document.getElementById('row3Col2').value;
    var row3Col3 = document.getElementById('row3Col3').value;

    //checking for o or player 2
    if(row1Col1 === 'o' && row1Col2 === 'o' && row1Col3 === 'o'){
        clearBoard();
        alert('Player 2 won!');     
    } else if(row2Col1 === 'o' && row2Col2 === 'o' && row2Col3 === 'o'){
        clearBoard();
        alert('Player 2 won!');     
    } else if(row3Col1 === 'o' && row3Col1 === 'o' && row3Col3 === 'o'){
        clearBoard();
        alert('Player 2 won!');     
    } else if(row1Col1 === 'o' && row2Col1 === 'o' && row3Col1 === 'o'){
        clearBoard();
        alert('Player 2 won!');     
    } else if(row1Col2 === 'o' && row2Col2 === 'o' && row3Col2 === 'o'){
        clearBoard();
        alert('Player 2 won!');     
    } else if(row1Col3 === 'o' && row2Col3 === 'o' && row3Col3 === 'o'){
        clearBoard();
        alert('Player 2 won!');     
    } else if(row1Col1 === 'o' && row2Col2 === 'o' && row3Col3 === 'o'){
        clearBoard();
        alert('Player 2 won!');     
    } else if(row1Col3 === 'o' && row2Col2 === 'o' && row3Col1 === 'o'){
        clearBoard();
        alert('Player 2 won!');     
    }

    //write code for x or player 1
    if(row1Col1 === 'x' && row1Col2 === 'x' && row1Col3 === 'x'){
        clearBoard();
        alert('Player 1 won!');     
    } else if(row2Col1 === 'x' && row2Col2 === 'x' && row2Col3 === 'x'){
        clearBoard();
        alert('Player 1 won!');     
    } else if(row3Col1 === 'x' && row3Col1 === 'x' && row3Col3 === 'x'){
        clearBoard();
        alert('Player 1 won!');     
    } else if(row1Col1 === 'x' && row2Col1 === 'x' && row3Col1 === 'x'){
        clearBoard();
        alert('Player 1 won!');     
    } else if(row1Col2 === 'x' && row2Col2 === 'x' && row3Col2 === 'x'){
        clearBoard();
        alert('Player 1 won!');     
    } else if(row1Col3 === 'x' && row2Col3 === 'x' && row3Col3 === 'x'){
        clearBoard();
        alert('Player 1 won!');     
    } else if(row1Col1 === 'x' && row2Col2 === 'x' && row3Col3 === 'x'){
        clearBoard();
        alert('Player 1 won!');     
    } else if(row1Col3 === 'x' && row2Col2 === 'x' && row3Col1 === 'x'){
        clearBoard();
        alert('Player 1 won!');     
    }
}

//this function clears all the inputs to reset the game
function clearBoard(){
    for(let clearBoard = 1; clearBoard <= 3; clearBoard++){
        document.getElementById('row1Col' + clearBoard).value = '';
        document.getElementById('row2Col' + clearBoard).value = '';
        document.getElementById('row3Col' + clearBoard).value = '';
    }
}

export default App;
