<template>
  <div class="about">
    <h1>About page sharedCounter: {{ sharedCounter }}</h1>
  </div>
</template>
<script setup>
import useComp from './useComp.js'
const {reuseData, increasedCompCount, sharedCounter} = useComp();

</script>

<style>

</style>
