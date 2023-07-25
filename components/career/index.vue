<script setup>
const { careers } = useStore();
</script>

<template>
  <section class="Career flex flex-col items-center">
    <button
      class="border px-2.5 py-1 w-fit background-10 textColor-p fontweight-700"
    >
      💼 Career
    </button>
    <h2 class="text-5xl mb-16 mt-4 text-white">Trajectory until here</h2>
    <div class="grid grid-cols-1 gap-6 sm:gap-1 sm:grid-cols-2 text-center">
      <CareerItems v-for="career in careers" :career="career" />
    </div>
  </section>
</template>
