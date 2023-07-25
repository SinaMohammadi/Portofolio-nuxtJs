<script setup>
const { item } = defineProps(["item"]);
console.log(item);
</script>
<template>
  <div
    class="flex text-start mx-1 sm:mx-20 p-8 flex-col gap-2 border border-solid border-purple-900 hover:bg-purple-900 hover hover:bg-opacity-20 rounded"
  >
    <h5 class="text-base sm:text-xl text-white">
      {{ item.title }}
    </h5>
    <h6 class="text-sm sm:text-base text-white opacity-60">
      {{ item.description }}
    </h6>
    <div class="flex justify-between text-purple-600 text-xs sm:text-lg">
      <span>{{ item.totalTime }}</span><span>{{ item.startDate }} · {{ item.endDate }} </span>
    </div>
  </div>
</template>
