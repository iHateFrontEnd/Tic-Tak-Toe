import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App(){
  sessionStorage.setItem('whoStarts', 'player1');

  return(
    <div className='startup' id='startup'>
      <h1>Click start to begin</h1>

      <button className='start' onClick={start}>start</button>
    </div> 
  );
}


function start(){
  class EnterPlayerNames extends React.Component{
    render(){
      return(
        <div className='playerNamesDiv' id='playerNamesDiv'>
          <h2>Enter a name for player 1</h2>

          <input className='playerNames' id='player1Name' />

          <h2>Enter a name for player 2</h2>

          <input className='playerNames' id='player2Name' />

          <br/>
          <br/>

          <button className='savePlyNames' onClick={savePlyNames}>Next</button>
        </div>
      );
    }
  }

  document.getElementById('startup').style.display = 'none';

  ReactDOM.render(
    <EnterPlayerNames />, document.getElementById('root')
  );
}

//this function saves costom names for the user
function savePlyNames(){
  const player1Name = document.getElementById('player1Name').value;
  const player2Name = document.getElementById('player2Name').value;

  if(player1Name === '' && player2Name === ''){
    sessionStorage.setItem('player1Name', 'player 1');
    sessionStorage.setItem('player2Name', 'player 2');

    game();
  } else if(player1Name.length >= 1 && player2Name === ''){
    sessionStorage.setItem('player1Name', player1Name);
    sessionStorage.setItem('player2Name', 'player 2');

    game();
  } else if(player1Name === '' && player2Name.length >= 1){
    sessionStorage.setItem('player1Name', 'player 1');
    sessionStorage.setItem('player2Name', player2Name);

    game();
  } else {
    sessionStorage.setItem('player1Name', player1Name);
    sessionStorage.setItem('player2Name', player2Name);

    game();
  }
}

function displayPlyNames(){
  return {__html: 'X = ' + sessionStorage.getItem('player1Name') + ', O = ' + sessionStorage.getItem('player2Name')};
}

function game(){
  document.getElementById('playerNamesDiv').style.display = 'none';

  class Game extends React.Component{
    render(){
      return(
        <div className='gameDiv' id='gameDiv'>
          <h1 dangerouslySetInnerHTML={displayPlyNames()} /> 
          
          <br/>
          <br/>

          <table className='gameTable' id='gameTable'>
            <tr>
              <td><input onChange={checkWhoWon} className='gameCells' id="row1Col1" /></td>
              <td><input onChange={checkWhoWon} className='gameCells' id="row1Col2" /></td>
              <td><input onChange={checkWhoWon} className='gameCells' id="row1Col3" /></td>
            </tr>
            
            <tr>
              <td><input onChange={checkWhoWon} className='gameCells' id="row2Col1" /></td>
              <td><input onChange={checkWhoWon} className='gameCells' id="row2Col2" /></td>
              <td><input onChange={checkWhoWon} className='gameCells' id="row2Col3" /></td>
            </tr>

            <tr>
              <td><input onChange={checkWhoWon} className='gameCells' id="row3Col1" /></td>
              <td><input onChange={checkWhoWon} className='gameCells' id="row3Col2" /></td>
              <td><input onChange={checkWhoWon} className='gameCells' id="row3Col3" /></td>
            </tr>
          </table>

          <button className='clearBtn' onClick={clearBoard}>CLEAR BOARD</button> 
        </div>
      ); 
    }
  }

  ReactDOM.render(
    <Game />, document.getElementById('root')
  );
}

function checkWhoWon(){
  const row1Col1 = document.getElementById('row1Col1').value;
  const row1Col2 = document.getElementById('row1Col2').value;
  const row1Col3 = document.getElementById('row1Col3').value;
  const row2Col1 = document.getElementById('row2Col1').value;
  const row2Col2 = document.getElementById('row2Col2').value;
  const row2Col3 = document.getElementById('row2Col3').value;
  const row3Col1 = document.getElementById('row3Col1').value;
  const row3Col2 = document.getElementById('row3Col2').value;
  const row3Col3 = document.getElementById('row3Col3').value;

  const gameCells = document.querySelectorAll('.gameCells').value;
   
  //checking for player 1 or X
  if(row1Col1 === 'x' && row1Col2 === 'x' && row1Col3 === 'x'){
    clearBoard('player1Name');
  } else if(row2Col1 === 'x' && row2Col2 === 'x' && row2Col3 === 'x'){
    clearBoard('player1Name');
  } else if(row3Col1 === 'x' && row3Col2 === 'x' && row3Col3 === 'x'){
    clearBoard('player1Name');
  } else if(row1Col1 === 'x' && row2Col1 === 'x' && row3Col1 === 'x'){
    clearBoard('player1Name');
  } else if(row1Col2 === 'x' && row2Col2 === 'x' && row3Col2 === 'x'){
    clearBoard('player1Name');
  } else if(row1Col3 === 'x' && row2Col3 === 'x' && row3Col3 === 'x'){
    clearBoard('player1Name');
  } else if(row1Col1 === 'x' && row2Col2 === 'x' && row3Col3 === 'x'){
    clearBoard('player1Name');
  } else if(row1Col3 === 'x' && row2Col2 === 'x' && row3Col1 === 'x'){
    clearBoard('player1Name');
  }

  //checking for player 2 or o
  if(row1Col1 === 'o' && row1Col2 === 'o' && row1Col3 === 'o'){
    clearBoard('player2Name');
  } else if(row2Col1 === 'o' && row2Col2 === 'o' && row2Col3 === 'o'){
    clearBoard('player2Name');
  } else if(row3Col1 === 'o' && row3Col2 === 'o' && row3Col3 === 'o'){
    clearBoard('player2Name');
  } else if(row1Col1 === 'o' && row2Col1 === 'o' && row3Col1 === 'o'){
    clearBoard('player2Name');
  } else if(row1Col2 === 'o' && row2Col2 === 'o' && row3Col2 === 'o'){
    clearBoard('player2Name');
  } else if(row1Col3 === 'o' && row2Col3 === 'o' && row3Col3 === 'o'){
    clearBoard('player2Name');
  } else if(row1Col1 === 'o' && row2Col2 === 'o' && row3Col3 === 'o'){
    clearBoard('player2Name');
  } else if(row1Col3 === 'o' && row2Col2 === 'o' && row3Col1 === 'o'){
    clearBoard('player2Name');
  }
}

//this function will clear the board player 1 wins
function clearBoard(winner){
  if(winner === 'player1Name' || winner === 'player2Name'){
    alert(sessionStorage.getItem(winner).toUpperCase() + ' WON!');
    
    for(let clearBoard = 1; clearBoard <= 3; clearBoard++){
      document.getElementById('row1Col' + clearBoard).value = '';
      document.getElementById('row2Col' + clearBoard).value = '';
      document.getElementById('row3Col' + clearBoard).value = '';
    }
  } else {
    for(let clearBoard = 1; clearBoard <= 3; clearBoard++){
      document.getElementById('row1Col' + clearBoard).value = '';
      document.getElementById('row2Col' + clearBoard).value = '';
      document.getElementById('row3Col' + clearBoard).value = '';
    }
  }
}

export default App;
