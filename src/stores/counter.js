import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 9, name: 'Eduardo' }),
    getters: {
      doubleCount: (state) => state.count * 2,
      oddOrEven: (state) => {
        if(state.count % 2 === 0){
            return 'event'
        }
        return 'odd';
      }
    },
    actions: {
      increment() {
        this.count++
      },
      decrement() {
        this.count--
      },
    },
  })