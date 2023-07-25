<script setup>
const {project} = defineProps(["project"]);
console.log(project);
</script>

<template>
  <div
    class="p-8 flex flex-col gap-5 border border-solid border-purple-900 hover:bg-purple-900 hover hover:bg-opacity-10 rounded-2xl"
  >
    <h3 class="text-white text-xl">{{ project.title }}</h3>
    <p class="text-white opacity-60 text-sm">
      {{ project.description }}
    </p>
    <div>
      <button
        v-for="tag in project.tags"
        class="border px-2.5 py-1 w-fit background-10 textColor-p fontweight-700 mr-1"
      >
        {{ tag }}
      </button>
    </div>
    <img src="./image 1.png" alt="" />
  </div>
</template>
