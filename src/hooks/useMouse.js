import { useState } from "react";
import useGrid from "../zustand/useGrid";
import useNodeState from "../zustand/useNodeState";

const useMouse=()=>{
    const [isMousePressed, setIsMousePressed] = useState(false);
    const {grid,setGrid,setStartNode,setFinishNode,startNode,finishNode}=useGrid();
    const { 
        isStartNode, 
        isFinishNode, 
        isWallNode,      
        setNodeType
    } = useNodeState();

    // setIsStartNode, 
    // setIsFinishNode, 
    // setIsWallNode ,
    const handleMouseDown = (row, col) => {
        setIsMousePressed(true);

        toggleWall(row, col);
      };
      const handleMouseEnter = (row, col) => {
        if (isMousePressed) {
          toggleWall(row, col);
        }
      };
      const handleMouseUp = () => {
        setIsMousePressed(false);
      };
      const handleOnClick = (row, col) => {
        if (isStartNode()) {
          setNodeType('normal');
          // setIsStartNode(false);
          grid[startNode.row][startNode.col].isStart = false;
          grid[row][col].isStart = true;
          setStartNode({ row,col});

        } else if (isFinishNode()) {
          setNodeType('normal');

          // setIsFinishNode(false);
          grid[finishNode.row][finishNode.col].isFinish = false;
          grid[row][col].isFinish = true;
          setFinishNode({row,col });

        } else if (isWallNode()) {
          setNodeType('normal');

          // setIsWallNode(false);
          grid[row][col].isWall = false;
        }
      };
    
      const toggleWall = (row, col) => {
        const newGrid = grid.slice();
        const node = newGrid[row][col];
        // if (!node.isStart && !node.isFinish) {
        //   node.isWall=true;
        // }
        const newNode = {
          ...node,
          isWall: !node.isWall,
        };
        newGrid[row][col] = newNode;
        setGrid(newGrid);
      };

    return {
        handleMouseDown,
        handleMouseEnter,
        handleMouseUp,
        handleOnClick
    };
}
export default useMouse