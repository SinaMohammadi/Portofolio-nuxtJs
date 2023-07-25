<script setup>
const { recommendations } = useStore();
</script>

<template>
  <section class="Recommendations">
    <button
      class="border px-2.5 py-1 w-fit background-10 textColor-p fontweight-700"
    >
      💬 Recommendations
    </button>
    <div class="flex justify-between items-center">
      <h2 class="text-2xl sm:text-5xl mb-16 mt-4 text-white">in deposition</h2>
      <div class="hidden sm:flex gap-3">
        <button
          class="w-12 h-12 rounded-2xl border border-solid border-purple-900 hover:bg-purple-900 hover hover:bg-opacity-20 textColor-p fontweight-700"
        ></button>
        <button
          class="w-12 h-12 rounded-2xl border border-solid border-purple-900 hover:bg-purple-900 hover hover:bg-opacity-20 textColor-p fontweight-700"
        >
          >
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-12">
      <RecommendationsRecommend
        v-for="recommend in recommendations"
        :recommend="recommend"
      />
    </div>
  </section>
</template>
