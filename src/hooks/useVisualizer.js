import { bfs } from "../algorithms/Bfs";
import { dfs } from "../algorithms/Dfs";
import useGrid from "../zustand/useGrid";
import useVisualizingState from "../zustand/useVisualizingState";
import useAlgorithm from "../zustand/useAlgorithm";
import { useEffect } from "react";
import useInitialGrid from "./useInititalGrid";



const useVisualizer = () => { 
    
  const {grid,visitedNodes,addVisitedNode,startNode,finishNode}=useGrid();
  const {setVisualizing}=useVisualizingState();
  const {algorithm}=useAlgorithm();
  const {setInitialGrid}=useInitialGrid();
  const START_NODE_ROW = startNode.row;
  const START_NODE_COL = startNode.col;
  const FINISH_NODE_ROW = finishNode.row;
  const FINISH_NODE_COL = finishNode.col;
  

  useEffect(() => {
    setInitialGrid();
  },[])


  const visualizeD= () => { 
    setVisualizing('visualizing');

    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    let visitedNodesInOrder;
    if (algorithm === "dfs") {
       visitedNodesInOrder = dfs(grid, startNode, finishNode);
    }
    else if(algorithm === "bfs"){
       visitedNodesInOrder = bfs(grid, startNode, finishNode);
    }
    animateAlgo(visitedNodesInOrder);

  }
  const animateAlgo=(visitedNodesInOrder)=>{
    let index = 0;
    const interval = setInterval(() => {
      if (index < visitedNodesInOrder.length) {
        const nodeKey = `${visitedNodesInOrder[index].row}-${visitedNodesInOrder[index].col}`;
        addVisitedNode(nodeKey);
        index++;
      } else {
        setVisualizing('normal');
        clearInterval(interval);
      }
    }, 100);
  }
  

    return {
        visualizeD,
        visitedNodes,
          } ;
}
export default useVisualizer