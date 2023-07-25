<script setup>
const { videos } = useStore();
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-14">
    <VideoProjectVideo v-for="video in videos" :video="video" />
  </div>
</template>
