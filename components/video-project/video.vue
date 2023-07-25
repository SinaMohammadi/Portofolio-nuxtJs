<script setup>
const { video } = defineProps(["video"]);
</script>
<template>
  <div
    class="p-8 flex flex-col gap-2 border border-solid border-purple-900 hover:bg-purple-900 hover hover:bg-opacity-20 rounded-2xl"
  >
    <img src="./image 2.png" alt="" />
    <div class="flex justify-between mt-2">
      <h4 class="text-xl text-white">{{ video.title }}</h4>
      <div class="flex">
        <button
          v-for="tag in video.tag"
          class="border px-2.5 py-1 w-fit background-10 textColor-p fontweight-700"
        >
          {{ tag }}
        </button>
      </div>
    </div>
    <div class="flex justify-between">
      <h4 class="text-lg text-white opacity-60">{{ video.description }}</h4>
      <span class="text-white">Assistir ></span>
    </div>
  </div>
</template>
