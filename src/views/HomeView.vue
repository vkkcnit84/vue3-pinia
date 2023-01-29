<template>
 <div class="home">
  Home
  <div class="count">{{ storeCount.count }}</div>
  <div class="button">
    <button @click="storeCount.increment">+</button>
    <button @click="storeCount.decrement">-</button>
  </div>
  {{ storeCount.oddOrEven }}
 </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useCounterStore }  from '@/stores/counter'

const storeCount = useCounterStore();

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
