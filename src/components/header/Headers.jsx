import useVisualizer from "../../hooks/useVisualizer"
import useGrid from "../../zustand/useGrid";
import useVisualizingState from "../../zustand/useVisualizingState";
import useAlgorithm from "../../zustand/useAlgorithm";
import useInitialGrid from "../../hooks/useInititalGrid";
import useNodeState from "../../zustand/useNodeState";

const Headers = () => {
  const {visualizeD}=useVisualizer();
  const {clearVisitedNodes}=useGrid();
  const {isVisualizing}=useVisualizingState();
  const {algorithm,setAlgorithm}=useAlgorithm();
  const {setInitialGrid}=useInitialGrid();
  const {setNodeType}=useNodeState();
  

  const handleSetAlgorithm=(algo) => {
    setAlgorithm(algo);
    clearVisitedNodes();
    setInitialGrid();
  };
  const handleClearGrid=()=>{
    clearVisitedNodes();
    setInitialGrid();
  }



  return (
  <div className="navbar bg-base-100 bg-blue-900" >
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl text-white bg-blue-400">Pathfinding Visualizer</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      <li>
      
      <details  >
          <summary className="h-8 px-4 m-2 bg-indigo-700 rounded-lg text-white"
          >Algorithm</summary>
          <ul className="p-2">
            <li>
              <button className="h-8 px-4 m-2 bg-indigo-700 rounded-lg btn btn-info text-white" 
              onClick={()=>handleSetAlgorithm("bfs")}>
                Breadth First Search
              </button>
            </li>
            <li>
              <button className="h-8 px-4 m-2 bg-indigo-700 rounded-lg btn btn-info text-white"
              onClick={()=>handleSetAlgorithm("dfs")}>
                Depth First Search
              </button>
            </li>
          </ul>
        </details>

      </li>
      <li>
      <button className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          onClick={handleClearGrid}
          disabled={isVisualizing}
          >Clear Grid</button>      
      </li>

      <li>
      <button className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          onClick={()=>setNodeType('wall')}
          disabled={isVisualizing}
          >Add Wall</button>      
      </li>
      <li>
      <button className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          onClick={()=>setNodeType('start')}
          disabled={isVisualizing}
          >Add Start</button>      
      </li>
      <li>
      <button className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          onClick={()=>setNodeType('finish')}
          disabled={isVisualizing}
          >Add Finish</button>      
      </li>

    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn btn-info text-white" onClick={visualizeD} >{algorithm.toUpperCase()} Visualize</button>
  </div>
</div>
  )
}

export default Headers