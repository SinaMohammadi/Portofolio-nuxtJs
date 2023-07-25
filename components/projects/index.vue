<script setup>
const { projects } = useStore();
console.log(projects);
</script>

<template>
  <section class="projects flex flex-col">
    <ProjectsSearch />
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-12 my-12">
      <ProjectsProject v-for="project in projects" :project="project" />
    </div>
  </section>
</template>
