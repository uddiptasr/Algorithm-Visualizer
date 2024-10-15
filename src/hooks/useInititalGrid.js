import useGrid from "../zustand/useGrid";

const useInitialGrid=()=>{
    const {startNode,finishNode}=useGrid();
    const START_NODE_ROW = startNode.row;
    const START_NODE_COL = startNode.col;
    const FINISH_NODE_ROW = finishNode.row;
    const FINISH_NODE_COL = finishNode.col;

    const {setGrid}=useGrid();

    const setInitialGrid=()=>{
      const newGrid=getInitialGrid();
      setGrid(newGrid);
    }
    const getInitialGrid = () => {
        const grid = [];
        for(let row=0;row<20;row++){
          const currentRow = [];
          for(let col=0;col<60;col++){
            currentRow.push(createNode(col,row));
          }
          grid.push(currentRow);
        }
        return grid;
      };
      
      const createNode = (col,row) => {
        return{
          col,
          row,
          isStart: row === START_NODE_ROW && col === START_NODE_COL,
          isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
          isWall:false,
          isVisited:false,
          isShortestPath:false,
          previousNode:null
        };
      };


    return {
      setInitialGrid,
      getInitialGrid,
      createNode,
    }
}
export default useInitialGrid