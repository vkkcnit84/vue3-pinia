<template>
 <div class="home">
  
  <!-- <div class="count">{{ storeCount.count }}</div> -->
    <button @click="increasedCompCount">Increase Counter</button>
 <h1>Home Page sharedCounter:{{ sharedCounter }}</h1>
 
 <AboutView></AboutView>
  <!-- <div class="button">
    <button @click="storeCount.increment">+</button>
    <button @click="storeCount.decrement">-</button>
  </div> -->
  <!-- {{ storeCount.oddOrEven }} -->
  <!-- <input type="text" v-model="storeCount.count" /> -->
 </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useCounterStore }  from '@/stores/counter'
import AboutView from './AboutView.vue'
import useComp from './useComp.js'

const storeCount = useCounterStore();
const {reuseData, increasedCompCount, sharedCounter} = useComp();

const count = ref(0);

const increasedCount = () => {
  count.value++;
}
const decreasedCount = () => {
  count.value--;
}

const oddOrEven11 = computed(() => {
  if(count.value % 2 === 0){
    return 'even'
  }
  return 'odd';
})


</script>

<style>
.count {
  font-size: 60px;
  margin: 20px;
}
.button {
  font-size: 60px;
  margin: 20px;
}
</style>
