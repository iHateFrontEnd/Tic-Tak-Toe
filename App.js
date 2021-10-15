import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App(){
  return(
    <div className='startup' id='startup'>
      <h1>Click start to start</h1>

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

          <br/>
          <br/>

          <button className='savePlyNames' onClick={saveDefaultNames}>Skip</button>
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
    sessionStorage.setItem('player1Name', 'PLAYER 1');
    sessionStorage.setItem('player2Name', 'PLAYER 2');

    document.getElementById('playerNamesDiv').style.display = 'none';

    game();
  } else {
    sessionStorage.setItem('player1Name', document.getElementById('player1Name').value)
    sessionStorage.setItem('player2Name', document.getElementById('player2Name').value)

    document.getElementById('playerNamesDiv').style.display = 'none';

    game();
  }
}

//this function saves default names for the use
function saveDefaultNames(){
  sessionStorage.setItem('player1Name', 'PLAYER 1')
  sessionStorage.setItem('player2Name', 'PLAYER 2')

  document.getElementById('playerNamesDiv').style.display = 'none';

  game();
}

function displayPlyNames(){
  return {__html: 'PLAYER 1: ' + sessionStorage.getItem('player1Name') + ', PLAYER 2: ' + sessionStorage.getItem('player2Name')}
}

function game(){
  class Game extends React.Component{
    render(){
      return(
        <div className='gameDiv' id='gameDiv'>
          <h1 dangerouslySetInnerHTML={displayPlyNames()} /> 
          
          <br/>
          <br/>

          <table className='gameTable' id='gameTable'>
            <tr>
              <td><input type="text" className='gameCells' id="row1Col1" /></td>
              <td><input type="text" className='gameCells' id="row1Col2" /></td>
              <td><input type="text" className='gameCells' id="row1Col3" /></td>
            </tr>
            
            <tr>
              <td><input type="text" className='gameCells' id="row2Col1" /></td>
              <td><input type="text" className='gameCells' id="row2Col2" /></td>
              <td><input type="text" className='gameCells' id="row2Col3" /></td>
            </tr>

            <tr>
              <td><input type="text" className='gameCells' id="row3Col1" /></td>
              <td><input type="text" className='gameCells' id="row3Col2" /></td>
              <td><input type="text" className='gameCells' id="row3Col3" /></td>
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

function clearBoard(){
  console.log('code is working');
}

export default App;
