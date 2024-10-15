import useNodeState from '../../zustand/useNodeState';
import './Node.css';

export const Node = ({ row, col, isStart, isFinish, isWall, isVisited,onMouseDown, onMouseEnter, onMouseUp,onClick }) => {
  const {isStartNode,isFinishNode,isWallNode}=useNodeState();

  const extraClassName = isStart 
    ? 'node-start' 
    : isFinish 
      ? 'node-finish' 
      : isWall 
        ? 'node-wall' 
        : isVisited 
          ? 'node-visited'
            : '';

  return (
    <div 
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      onMouseDown={() => isWallNode() && onMouseDown(row, col)}
      onMouseEnter={() => isWallNode() && onMouseEnter(row, col)}
      onMouseUp={onMouseUp}
      onClick={() => (isStartNode() || isFinishNode()) && onClick(row, col)}
    ></div>
  );
};
