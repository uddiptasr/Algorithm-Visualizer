import { Node } from "../node/Node.jsx";
import useVisualizer from "../../hooks/useVisualizer.js";
import useGrid from "../../zustand/useGrid.js";
import useMouse from "../../hooks/useMouse.js";


const Visualizer = () => {
  
  const {grid,visitedNodes} = useGrid();
  const {visualizeD} = useVisualizer();
  const {handleMouseDown,handleMouseEnter,handleMouseUp,handleOnClick}=useMouse();


  return (
    <>
    <button 
    className="bg-red-400 text-white px-4 py-2 justify-center rounded-md"
    onClick={() => visualizeD()}>
        </button>
      <div className="grid mt-4 justify-center">
          {
          grid.map((row,rowIdx) => 
            (
              <div key={rowIdx} className="flex content-center">
                {
                row.map((node,nodeIdx) =>{                  
                  const {row, col, isFinish, isStart, isWall} = node;
                  const isVisited = visitedNodes?.has(`${row}-${col}`);      
                return( 
                   <Node key={nodeIdx}
                   row={row}
                   col={col}
                   isFinish={isFinish}
                   isStart={isStart}
                   isWall={isWall}
                   isVisited={isVisited}
                   onMouseDown={handleMouseDown}
                   onMouseEnter={handleMouseEnter}
                   onMouseUp={handleMouseUp}
                   onClick={handleOnClick}
                   />
                )
})}
              </div>
            )
          )}
      </div>
    </>
  )
}


export default Visualizer