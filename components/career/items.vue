<script setup>
const { career } = defineProps(["career"]);
</script>
<template>
  <div>
    <h3 class="text-white text-3xl">{{ career.title }}</h3>
    <h4 class="text-white mt-2 mb-16 opacity-60 text-2xl">
      {{ career.startDate }} · {{ career.endDate }}
    </h4>
    <div class="flex flex-col gap-16">
      <CareerItem v-for="item in career.items" :item="item" />
    </div>
  </div>
</template>
