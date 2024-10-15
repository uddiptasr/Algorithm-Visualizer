import { create } from 'zustand';


const useNodeState = create((set,get) => ({
    nodeType: 'normal', // Default node type
    setNodeType: (type) => set(() => ({
        nodeType: type,
    })),

    isStartNode: () => get().nodeType === 'start',
    isFinishNode: () => get().nodeType === 'finish',
    isWallNode: () => get().nodeType === 'wall',
}));

export default useNodeState;

// const useNodeState = create((set) => ({
//     isStartNode: false,
//     isFinishNode: false,
//     isWallNode: false,

//     setIsStartNode: () => set(() => ({
//         isStartNode: true,
//         isFinishNode: false,
//         isWallNode: false,
//     })),

//     setIsFinishNode: () => set(() => ({
//         isStartNode: false,
//         isFinishNode: true,
//         isWallNode: false,
//     })),

//     setIsWallNode: () => set(() => ({
//         isStartNode: false,
//         isFinishNode: false,
//         isWallNode: true,
//     })),
// }));

// export default useNodeState;
