import {create} from 'zustand';

const useVisualizingState =create((set)=>({
    visualizing:'normal', //visualizing
    isVisualizing: false,   

    setVisualizing: (type) => {
        set({
            visualizing: type,
            isVisualizing: type === 'visualizing', 
        });
    },
}));
  
export default useVisualizingState;