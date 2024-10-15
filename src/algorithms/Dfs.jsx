
export function dfs(grid, startNode, finishNode) {
    const visitedNodesInOrder = [];
    const stack = [startNode];
    
    while (stack.length) {
      const currentNode = stack.pop();
      
      if (currentNode.isWall || currentNode.isVisited) continue;
      visitedNodesInOrder.push(currentNode);

      currentNode.isVisited = true;
      
      if (currentNode === finishNode) return visitedNodesInOrder;
  
      const unvisitedNeighbors = getUnvisitedNeighbors(currentNode, grid);
      for (const neighbor of unvisitedNeighbors) {
        neighbor.previousNode = currentNode; 
        stack.push(neighbor);
      }
    }
    
    return visitedNodesInOrder; 
  }
  
  function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const { col, row } = node;
    if (col > 0) neighbors.push(grid[row][col - 1]); // Left
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]); // Down
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]); // Right
    if (row > 0) neighbors.push(grid[row - 1][col]); // Up

    return neighbors.filter(neighbor => !neighbor.isVisited);
  }

  export function getNodesInPathOrderDfs(finishNode) {
    const nodesInPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInPathOrder;
  }
  