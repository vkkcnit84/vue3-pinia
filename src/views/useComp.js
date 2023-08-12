import {ref} from 'vue'
export const sharedCounter = ref(0);

export default function useComp(){

    const increasedCompCount = () => {
        sharedCounter.value++;
    }

    return {
        increasedCompCount,
        sharedCounter
    }
}