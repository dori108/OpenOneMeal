import React from 'react';
import Square from './Square';
import { useState } from 'react';
function Square() {
    const [isPurple, setIsPurple] = useState(false);
  
    function handleClick() {
      setIsPurple(true);
    }
  
    return (
      <button
        className="square"
        onClick={handleClick}
        style={{ backgroundColor: isPurple ? 'purple' : 'white' }}
      >
      </button>
    );
  }
  
  export default Square;
export default function Board() {
    return (
        <>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
        </>
      );
}
export default function Board() {
    return (
      <>
        <div className="board-row">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
          <button className="square">4</button>
          <button className="square">5</button>

        </div>
        <div className="board-row">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
          <button className="square">4</button>
          <button className="square">5</button>
        </div>
        <div className="board-row">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
          <button className="square">4</button>
          <button className="square">5</button>
        </div>
        <div className="board-row">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
          <button className="square">4</button>
          <button className="square">5</button>
        </div>
        <div className="board-row">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
          <button className="square">4</button>
          <button className="square">5</button>
        </div>
        <div className="board-row">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
          <button className="square">4</button>
          <button className="square">5</button>
        </div>
        <div className="board-row">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
          <button className="square">4</button>
          <button className="square">5</button>
        </div>
        <div className="board-row">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
          <button className="square">4</button>
          <button className="square">5</button>
        </div>
        <div className="board-row">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
          <button className="square">4</button>
          <button className="square">5</button>
        </div>
        <div className="board-row">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
          <button className="square">4</button>
          <button className="square">5</button>
        </div>
        <div className="board-row">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
          <button className="square">4</button>
          <button className="square">5</button>
        </div>
      </>
    );
  }
function Board() {
   const renderSquare = (i) => {
     return <Square key={i} />;
   };
 
   const boardRows = 5;
   const boardCols = 11;
   const board = [];
   for (let i = 0; i < boardRows; i++) {
     const row = [];
     for (let j = 0; j < boardCols; j++) {
       row.push(renderSquare(i * boardCols + j));
     }
     board.push(<div key={i} className="board-row">{row}</div>);
   }
 
   return (
     <div>
       {board}
     </div>
   );
 }
  
export default Board;
  
