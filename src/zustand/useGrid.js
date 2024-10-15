import {create} from 'zustand';

const useGrid =create((set)=>({
    grid:[],
  
    setGrid:(grid)=>set({grid}),

    visitedNodes:new Set(),

    setVisitedNodes: (newVisitedNodes) => set({ visitedNodes: newVisitedNodes }), 

    addVisitedNode: (nodeKey) => set((state) => {
      return {visitedNodes: new Set(state.visitedNodes).add(nodeKey)}
    }),

  
    clearVisitedNodes: () => 
      set({ 
        visitedNodes: new Set(),
        }), 

    startNode:{row:10,col:10},
    setStartNode:(node)=>set({startNode:node}),
    finishNode:{row:10,col:30},
    setFinishNode:(node)=>set({finishNode:node}),
  }));
  
export default useGrid;