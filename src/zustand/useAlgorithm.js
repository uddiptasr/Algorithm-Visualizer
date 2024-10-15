import {create} from 'zustand';

const useAlgorithm=create((set)=>({
    algorithms:["dfs","bfs"],
    algorithm:"bfs",
    setAlgorithm: (algo) => set({ algorithm: algo})
}))

export default useAlgorithm;