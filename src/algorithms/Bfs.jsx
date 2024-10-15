
export function bfs(grid, startNode, finishNode) {
    const visitedNodesInOrder = [];
    const queue = [startNode];
    startNode.isVisited = true;
  
    while (queue.length) {
      const currentNode = queue.shift();
  
      if (currentNode.isWall) continue;
  
      visitedNodesInOrder.push(currentNode);
  
      if (currentNode === finishNode) return visitedNodesInOrder;
  
      const unvisitedNeighbors = getUnvisitedNeighbors(currentNode, grid);
      for (const neighbor of unvisitedNeighbors) {
        neighbor.isVisited = true;
        neighbor.previousNode = currentNode; 
        queue.push(neighbor);
      }
    }
  
    return visitedNodesInOrder;
  }
  
  function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const { col, row } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]); // Up
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]); // Down
    if (col > 0) neighbors.push(grid[row][col - 1]); // Left
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]); // Right
    return neighbors.filter(neighbor => !neighbor.isVisited && !neighbor.isWall);
  }
  
  export function getNodesInPathOrderBfs(finishNode) {
    const nodesInPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInPathOrder;
  }
  